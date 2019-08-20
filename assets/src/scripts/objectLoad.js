import { scene, smoke } from "./renderInit";

var models = {
    friTree: {
        glb: "assets/dist/object/tree/fri/friTree.glb",
        name: "fri_tree",
        mesh: null
    },
    LowTree: {
        glb: "assets/dist/object/tree/low-poly-tree/lowPolyTree.glb",
        name: "low_tree",
        mesh: null
    },
    street: {
        glb: "assets/dist/object/street/street.glb",
        name: "street",
        mesh: null
    },

    home: {
        glb: "assets/dist/object/building/home.glb",
        name: "home",
        mesh: null
    },
    char: {
        glb: "assets/dist/object/char/char.glb",
        name: "char",
        mesh: null
    },
    gras: {
        glb: "assets/dist/object/enviroment/gras.glb",
        name: "gras",
        mesh: null
    },
    smoke: {
        glb: "assets/dist/object/smoke/smoke.glb",
        name: "smoke",
        mesh: null
    },
    lunar: {
        glb: "assets/dist/object/lunar/lunar.glb",
        name: "lunar",
        mesh: null
    }
};

var meshes = {};
var objectByName;

var LOADING_MANAGER = null;
var RESOURCES_LOADED = false;

var loadingManager = new THREE.LoadingManager();

loadingManager.onProgress = function (item, loaded, total) {
    console.log(item, loaded, total);
};

loadingManager.onLoad = function () {
    console.log("loaded all resources");
    RESOURCES_LOADED = true;
    onResourcesLoad();
}

function objectLoad() {
    for (var _key in models) {
        (function (key) {

            var loader = new THREE.GLTFLoader(loadingManager);
            loader.load(models[key].glb, function (gltf) {
                var mesh = gltf.scene;
                mesh.traverse(function (object) {
                    if (object.isMesh) object.castShadow = true;
                });
                mesh.name = '"' + models[key].name + '"';
                models[key].mesh = mesh;
            });
        })(_key);
    }
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
    meshes["lunar"] = models.lunar.mesh.clone();

    meshes["smoke00"] = models.smoke.mesh.clone();
    meshes["smoke01"] = models.smoke.mesh.clone();
    meshes["smoke02"] = models.smoke.mesh.clone();
    meshes["smoke03"] = models.smoke.mesh.clone();
    meshes["smoke04"] = models.smoke.mesh.clone();

    meshes["friTree01"].position.set(0.5, 0, 2);
    meshes["friTree02"].position.set(-0.5, 0, 1.5);
    meshes["friTree03"].position.set(3, 0, 1.5);
    meshes["friTree04"].position.set(4, 0, 2.5);

    meshes["lowTree01"].position.set(2, 0, 2.5);
    meshes["lowTree02"].position.set(5, 0, 1.5);
    meshes["lowTree01"].rotation.y = -Math.PI / 2;
    meshes["lowTree01"].scale.set(0.5, 0.5, 0.5);
    meshes["lowTree02"].scale.set(0.5, 0.5, 0.5);

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

    meshes["gras01"].position.set(-4, 0.1, 2);
    meshes["gras02"].position.set(-2, 0.1, 2);
    meshes["gras03"].position.set(0, 0.1, 2);
    meshes["gras04"].position.set(2, 0.1, 2);
    meshes["gras05"].position.set(4, 0.1, 2);
    meshes["gras06"].position.set(6, 0.1, 2);

    meshes["home"].position.set(1, 0.05, -3);
    meshes["home"].scale.set(2, 2, 2);

    meshes["char"].position.set(0.8, 0.17, -0.8);
    meshes["char"].rotation.y = -Math.PI / 2;

    // meshes["smoke00"].position.set(0.8, 0.5, -0.8);
    meshes["smoke00"].position.set(0.8, -2.5 + 1.5, -0.8);
    meshes["smoke00"].scale.set(0.5, 0.5, 0.5);

    meshes["smoke01"].position.set(0.8, -2.5 + 1.7, -1);
    meshes["smoke01"].scale.set(0.45, 0.45, 0.45);

    meshes["smoke02"].position.set(0.8, -2.5 + 1.8, -0.5);
    meshes["smoke02"].scale.set(0.3, 0.3, 0.3);

    meshes["smoke03"].position.set(0.8, -2.5 + 2, -0.8);
    meshes["smoke03"].scale.set(0.25, 0.25, 0.25);

    meshes["smoke04"].position.set(0.7, -2.5 + 2.2, -0.9);
    meshes["smoke04"].scale.set(0.2, 0.2, 0.2);

    meshes["lunar"].position.set(0.8, 2, -0.8)

    meshes["char"].rotation.y = -45 * Math.PI / 180;
    meshes["char"].scale.set(0.05, 0.05, 0.05);

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

    scene.add(meshes["smoke00"]);
    scene.add(meshes["smoke01"]);
    scene.add(meshes["smoke02"]);
    scene.add(meshes["smoke03"]);
    scene.add(meshes["smoke04"]);

    scene.add(meshes["lunar"]);
    console.log(meshes["lunar"])

    for (let index = 0; index < 5; index++) {
        smoke[index] = meshes["smoke0" + [index]];

    }

    objectByName = meshes["char"];
    objectByName.visible = false;

    console.log(objectByName.position);

}

export {
    objectLoad,
    onResourcesLoad,
    RESOURCES_LOADED,
    objectByName,
    meshes
}