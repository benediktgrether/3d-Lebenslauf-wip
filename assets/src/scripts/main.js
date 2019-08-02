import jQuery from "jquery"
window.$ = jQuery;
window.jQuery = jQuery;

var camera, scene, renderer;
var controls;
var aspect = window.innerWidth / window.innerHeight;
var d = 2.5;
const gui = new dat.GUI();

var isControlEnable = false;

// var model;
// var skeleton;

var keyboard = {};

// Velocity vector for the player
var playerVelocity = new THREE.Vector3();

// How fast the player will move
var PLAYERSPEED = 25;

var clock;
clock = new THREE.Clock();
//#region Loading Screen

var loadingScreen = {
    scene: new THREE.Scene(),
    camera: new THREE.PerspectiveCamera(90, aspect, 0.1, 100),
    box: new THREE.Mesh(
        new THREE.BoxGeometry(0.5, 0.5, 0.5),
        new THREE.MeshBasicMaterial({ color: 0x4444ff })
    )
};

var LOADING_MANAGER = null;
var RESOURCES_LOADED = false;

//#endregion

//#region Models

var models = {
    friTree: {
        obj: "assets/dist/object/tree/fri/fri_tree.obj",
        mtl: "assets/dist/object/tree/fri/fri_tree.mtl",
        // path: "tree/fri/",
        name: "fri_tree",
        postionX: 0,
        postionY: 0,
        postionZ: 2,
        mesh: null
    },
    LowTree: {
        obj: "assets/dist/object/tree/low-poly-tree/low_tree.obj",
        mtl: "assets/dist/object/tree/low-poly-tree/low_tree.mtl",
        // path: "tree/fri/",
        name: "low_tree",
        postionX: 0,
        postionY: 0,
        postionZ: 2,
        mesh: null
    },
    street: {
        obj: "assets/dist/object/street/street.obj",
        mtl: "assets/dist/object/street/street.mtl",
        // path: "street/",
        name: "street",
        postionX: 0,
        postionY: 0.1,
        postionZ: 0,
        mesh: null
    },
    home: {
        obj: "assets/dist/object/building/home.obj",
        mtl: "assets/dist/object/building/home.mtl",
        // path: "building/",
        name: "home",
        postionX: 0,
        postionY: 0.1,
        postionZ: -2,
        mesh: null
    },
    char: {
        obj: "assets/dist/object/char/char_no_rigging.obj",
        mtl: "assets/dist/object/char/char_no_rigging.mtl",
        // path: "building/",
        name: "char",
        postionX: 0,
        postionY: 0.1,
        postionZ: -2,
        mesh: null
    },
    gras: {
        obj: "assets/dist/object/enviroment/gras.obj",
        mtl: "assets/dist/object/enviroment/gras.mtl",
        // path: "building/",
        name: "gras",
        postionX: 0,
        postionY: 0.1,
        postionZ: -2,
        mesh: null
    }
};

var meshes = {};
var objectByName;
var collidableMeshList = [];

//#endregion


$(document).ready(function () {

    console.info('DOM Ready');
    renderInit();
});

function renderInit() {
    scene = new THREE.Scene();

    //#region Isometric Camera
    camera = new THREE.OrthographicCamera(- d * aspect, d * aspect, d, -d, 1, 1000);

    // camera = new THREE.OrthographicCamera(- d * aspect, d * aspect, d, - d, 1, 1000);

    camera.position.set(20.8, 20, 20 - 0.8); // all components equal
    camera.lookAt(scene.position); // or the origin

    window.addEventListener('resize', onWindowResize, false);
    //#endregion

    //#region Loading Screen
    loadingScreen.box.position.set(0, 0, 5);
    loadingScreen.camera.lookAt(loadingScreen.box.position);
    loadingScreen.scene.add(loadingScreen.box);

    var loadingManager = new THREE.LoadingManager();


    loadingManager.onProgress = function (item, loaded, total) {
        console.log(item, loaded, total);
    };

    loadingManager.onLoad = function () {
        console.log("loaded all resources");
        RESOURCES_LOADED = true;
        onResourcesLoad();
    }
    //#endregion


    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xc7e1ff);
    document.body.appendChild(renderer.domElement);

    renderer.gammaOutput = true;
    renderer.gammaFactor = 2.0;

    renderer.shadowMapEnabled = true;
    renderer.shadowMapSoft = true;
    renderer.shadowMap.renderSingleSided = false; // default is true

    //#region HemiLight
    var hemiLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
    scene.add(hemiLight);

    // var helper = new THREE.HemisphereLightHelper(hemiLight, 5);

    // scene.add(helper);

    //#endregion

    // var axesHelper = new THREE.AxesHelper(2);
    // scene.add(axesHelper);

    //#region spotLight
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(3, 14, 12);
    spotLight.castShadow = true;
    // spotLight.shadow.radius = 4;

    spotLight.shadowMapWidth = 2048;
    spotLight.shadowMapHeight = 2048;
    spotLight.shadowCameraNear = 1;
    spotLight.shadowCameraFar = 4000;
    spotLight.shadowCameraFov = 45;
    scene.add(spotLight);

    //Create a helper for the shadow camera (optional)
    // var helper = new THREE.CameraHelper(spotLight.shadow.camera);
    // scene.add(helper);
    //#enregion

    //#region Plane Ground
    var geometry = new THREE.PlaneGeometry(20, 20, 20);
    var material = new THREE.MeshBasicMaterial({ color: 0x25781f, side: THREE.DoubleSide });
    var planeGround = new THREE.Mesh(geometry, material);
    planeGround.rotation.x = -Math.PI / 2;
    planeGround.name = "plane";
    scene.add(planeGround);


    //Shadow for Plane Material
    var planeGeometry = new THREE.PlaneGeometry(2000, 2000);
    planeGeometry.rotateX(- Math.PI / 2);

    var planeMaterial = new THREE.ShadowMaterial();
    planeMaterial.opacity = 0.2;

    var planeShadow = new THREE.Mesh(planeGeometry, planeMaterial);
    planeShadow.receiveShadow = true;
    planeShadow.position.y = 0.1;
    scene.add(planeShadow);

    //#endregion

    //#region OBJ Loader


    for (var _key in models) {
        (function (key) {
            var mtlLoader = new THREE.MTLLoader(loadingManager);
            mtlLoader.load(models[key].mtl, function (materials) {
                materials.preload();

                var objLoader = new THREE.OBJLoader(loadingManager);
                objLoader.setMaterials(materials);
                objLoader.load(models[key].obj, function (mesh) {

                    mesh.traverse(function (node) {
                        if (node instanceof THREE.Mesh) {
                            node.castShadow = true;
                            node.receiveShadow = true;
                        }
                    });
                    mesh.name = '"' + models[key].name + '"';
                    models[key].mesh = mesh;

                });
            });
        })(_key);
    }
    //#endregion

    // loadCharSkeleton();

    //#region Light UI

    var light = gui.addFolder('spotLight');
    light.add(spotLight.position, 'x', 0, 100);
    light.add(spotLight.position, 'y', 0, 100);
    light.add(spotLight.position, 'z', 0, 100);
    // light.open();

    var cameraGui = gui.addFolder('camera');
    cameraGui.add(camera.position, 'x', 0, 50);
    cameraGui.add(camera.position, 'y', 0, 50);
    cameraGui.add(camera.position, 'z', 0, 50);


    var settings = {
        'enable Controls': false
    };
    var folder1 = gui.addFolder('enableControls');
    folder1.add(settings, 'enable Controls').onChange(setEnableControls);

    function setEnableControls(enableControls) {
        // enableControls = enableControls;
        isControlEnable = enableControls;
        if(isControlEnable == true){
            controls = new THREE.OrbitControls(camera, renderer.domElement);
            controls.update();
        }
    }
    // function showSkeleton(visibility) {
    //     skeleton.visible = visibility;
    // }
    // cameraGui.open();

    // var charGui = gui.addFolder('Char');
    // charGui.add(objectByName.position, 'x', 0, 50);

    //#endregion

    //#region shadow

    //Set up shadow properties for the light
    // light.shadow.mapSize.width = 512;  // default
    // light.shadow.mapSize.height = 512; // default
    // light.shadow.camera.near = 0.5;       // default
    // light.shadow.camera.far = 500      // default
    //#endregion

    //#region Controls

    // var controls = new THREE.OrbitControls(camera, renderer.domElement);
    // controls.update();

    //# endregion

    var prevTime = Date.now();

    var animate = function () {

        if (RESOURCES_LOADED == false) {
            requestAnimationFrame(animate);

            renderer.render(loadingScreen.scene, loadingScreen.camera)
            return;
        }

        var delta = clock.getDelta();
        charMovement(delta);

        renderer.render(scene, camera);

        if(isControlEnable == true){
            controls.update();
        }
        // controls.update();

        camera.lookAt(objectByName.position);

        requestAnimationFrame(function () {
            animate(renderer, scene, camera);
        });
    };
    animate();
}

function onResourcesLoad() {
    meshes["friTree01"] = models.friTree.mesh.clone();
    meshes["friTree02"] = models.friTree.mesh.clone();
    meshes["friTree03"] = models.friTree.mesh.clone();
    meshes["friTree04"] = models.friTree.mesh.clone();
    meshes["lowTree01"] = models.LowTree.mesh.clone();
    meshes["lowTree02"] = models.LowTree.mesh.clone();
    meshes["street01"] = models.street.mesh.clone();
    meshes["street02"] = models.street.mesh.clone();
    meshes["street03"] = models.street.mesh.clone();
    meshes["street04"] = models.street.mesh.clone();
    meshes["street05"] = models.street.mesh.clone();
    meshes["street06"] = models.street.mesh.clone();
    meshes["street07"] = models.street.mesh.clone();
    meshes["street08"] = models.street.mesh.clone();
    meshes["street09"] = models.street.mesh.clone();
    meshes["street10"] = models.street.mesh.clone();
    meshes["home"] = models.home.mesh.clone();
    meshes["char"] = models.char.mesh.clone();
    meshes["gras01"] = models.gras.mesh.clone();
    meshes["gras02"] = models.gras.mesh.clone();
    meshes["gras03"] = models.gras.mesh.clone();
    meshes["gras04"] = models.gras.mesh.clone();
    meshes["gras05"] = models.gras.mesh.clone();
    meshes["gras06"] = models.gras.mesh.clone();

    meshes["friTree01"].position.set(0.5, 0, 2);
    meshes["friTree02"].position.set(-0.5, 0, 1.5);
    meshes["friTree03"].position.set(3, 0, 1.5);
    meshes["friTree04"].position.set(4, 0, 2.5);

    meshes["lowTree01"].position.set(2, 0 ,2.5);
    meshes["lowTree02"].position.set(5, 0 ,1.5);
    meshes["lowTree01"].rotation.y = -Math.PI/2;
    meshes["lowTree01"].scale.set(0.5, 0.5 ,0.5);
    meshes["lowTree02"].scale.set(0.5, 0.5 ,0.5);

    meshes["street01"].position.set(-4, 0.1, 0);
    meshes["street02"].position.set(-2, 0.1, 0);
    meshes["street03"].position.set(0, 0.1, 0);
    meshes["street04"].position.set(2, 0.1, 0);
    meshes["street05"].position.set(4, 0.1, 0);
    meshes["street06"].position.set(6, 0.1, 0);
    meshes["street07"].position.set(8, 0.1, 0);
    meshes["street08"].position.set(10, 0.1, 0);
    meshes["street09"].position.set(12, 0.1, 0);
    meshes["street10"].position.set(14, 0.1, 0);
    
    meshes["gras01"].position.set(-4, 0.1 , 2);
    meshes["gras02"].position.set(-2, 0.1 , 2);
    meshes["gras03"].position.set(0, 0.1 , 2);
    meshes["gras04"].position.set(2, 0.1 , 2);
    meshes["gras05"].position.set(4, 0.1 , 2);
    meshes["gras06"].position.set(6, 0.1 , 2);
    
    meshes["home"].position.set(1, 0.05, -3);
    meshes["home"].scale.set(2, 2, 2);
   
    meshes["char"].position.set(0.8, 0.17, -0.8);
    meshes["char"].rotation.y = -Math.PI / 2;
    // meshes["char"].rotation.y = -45 * Math.PI / 180;
    // meshes["char"].scale.set(0.05, 0.05, 0.05);

    scene.add(meshes["friTree01"]);
    scene.add(meshes["friTree02"]);
    scene.add(meshes["friTree03"]);
    scene.add(meshes["friTree04"]);
    scene.add(meshes["lowTree01"]);
    scene.add(meshes["lowTree02"]);
    scene.add(meshes["street01"]);
    scene.add(meshes["street02"]);
    scene.add(meshes["street03"]);
    scene.add(meshes["street04"]);
    scene.add(meshes["street05"]);
    scene.add(meshes["street06"]);
    scene.add(meshes["street07"]);
    scene.add(meshes["street08"]);
    scene.add(meshes["street09"]);
    scene.add(meshes["street10"]);
    scene.add(meshes["home"]);
    scene.add(meshes["char"]);
    scene.add(meshes["gras01"]);
    scene.add(meshes["gras02"]);
    scene.add(meshes["gras03"]);
    scene.add(meshes["gras04"]);
    scene.add(meshes["gras05"]);
    scene.add(meshes["gras06"]);
    
    objectByName = meshes["char"];
    console.log(objectByName);

    setTimeout(showIntro, 3000);
    // console.log(objectByName.skeleton.bones);
    // collidableMeshList.push(meshes["home"]);
}
function showIntro(){
    // alert("Hello");
}

// function loadCharSkeleton() {
//     var loader = new THREE.GLTFLoader();
//     loader.load('/assets/dist/object/test/scene.gltf', function (gltf) {
//         model = gltf.scene;
//         model.position.y = 0.1;
//         model.scale.set(0.25, 0.25, 0.25);
//         model.rotation.y = Math.PI/2;
//         scene.add(model);
//         objectByName = model;
//         model.traverse(function (object) {
//             if (object.isMesh) object.castShadow = true;
//         });
//         //
//         skeleton = new THREE.SkeletonHelper(model);
//         skeleton.visible = false;
//         scene.add(skeleton);
//         console.log(model);
//     });
// }

function onWindowResize() {

    var aspect = window.innerWidth / window.innerHeight;

    camera.left = - d * aspect;
    camera.right = d * aspect;
    camera.top = d;
    camera.bottom = - d;

    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

}

function charMovement(delta) {
    playerVelocity.x -= playerVelocity.x * 10.0 * delta;
    playerVelocity.z -= playerVelocity.z * 10.0 * delta;
    playerVelocity.y -= playerVelocity.y * 10.0 * delta;

    if (keyboard[87] || keyboard[38] || keyboard[83] || keyboard[40] || keyboard[37] || keyboard[39]) {
        if (keyboard[87] || keyboard[38]) {
            playerVelocity.x += PLAYERSPEED * delta;
            // console.log(objectByName.position);
        }
        if (keyboard[83] || keyboard[40]) {
            playerVelocity.x -= PLAYERSPEED * delta;
        }

        if (keyboard[37]) {
            objectByName.rotation.y += Math.PI * 0.01;
        }
        if (keyboard[39]) {
            objectByName.rotation.y -= Math.PI * 0.01;
        }
        // console.log(camera.translateX)
        objectByName.translateX(playerVelocity.x * delta);
        objectByName.translateZ(playerVelocity.z * delta);

        // #region Camera
        camera.position.x = 20 + objectByName.position.x;
        camera.position.z = 20 + objectByName.position.z;
        camera.updateProjectionMatrix();
    } else {
        // Collision or no movement key being pressed. Stop movememnt
        playerVelocity.x = 0;
        playerVelocity.z = 0;
    }
}

function keyDown(event) {
    keyboard[event.keyCode] = true;
}

function keyUp(event) {
    keyboard[event.keyCode] = false;
}

window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);