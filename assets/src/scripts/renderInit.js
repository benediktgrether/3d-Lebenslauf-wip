import { nav, cv, hobby } from "./main";
import { moveToNewLocation, moveToLocation, tweenUpdate } from "./tweenObject";
import { objectLoad, objectByName, RESOURCES_LOADED } from "./objectLoad";
import {
  setShowHoloTimeout,
  startingHolo,
  showInformationForHolo
} from "./holoFrame";
// import { tweenUpdate } from "./lunarLanding";

var camera, scene, renderer;
var controls;
var aspect = window.innerWidth / window.innerHeight;
var d = 2.5;
const gui = new dat.GUI();

var isControlEnable = false;

// var positionSmoke = false;
// var showModel = true;

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

//#endregion

function renderInit() {
  scene = new THREE.Scene();

  //#region Isometric Camera
  camera = new THREE.OrthographicCamera(
    -d * aspect,
    d * aspect,
    d,
    -d,
    1,
    1000
  );

  // camera = new THREE.OrthographicCamera(- d * aspect, d * aspect, d, - d, 1, 1000);

  camera.position.set(20.8, 20, 20 - 0.8); // all components equal
  camera.lookAt(scene.position); // or the origin

  window.addEventListener("resize", onWindowResize, false);
  //#endregion

  //#region Loading Screen
  loadingScreen.box.position.set(0, 0, 5);
  loadingScreen.camera.lookAt(loadingScreen.box.position);
  loadingScreen.scene.add(loadingScreen.box);

  objectLoad();
  //#endregion

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  // renderer.setClearColor(0xc7e1ff);
  renderer.setClearColor(0x333333);
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
  spotLight.intensity = 5;
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
  // var geometry = new THREE.PlaneGeometry(20, 20, 20);
  // var material = new THREE.MeshBasicMaterial({ color: 0x25781f, side: THREE.DoubleSide });
  // var planeGround = new THREE.Mesh(geometry, material);
  // planeGround.rotation.x = -Math.PI / 2;
  // planeGround.name = "plane";
  // scene.add(planeGround);

  //Shadow for Plane Material
  var planeGeometry = new THREE.PlaneGeometry(2000, 2000);
  planeGeometry.rotateX(-Math.PI / 2);

  var planeMaterial = new THREE.ShadowMaterial();
  planeMaterial.opacity = 0.2;

  var planeShadow = new THREE.Mesh(planeGeometry, planeMaterial);
  planeShadow.receiveShadow = true;
  planeShadow.position.y = 0.1;
  scene.add(planeShadow);

  //#endregion

  //#region Light UI

  var light = gui.addFolder("spotLight");
  light.add(spotLight.position, "x", 0, 100);
  light.add(spotLight.position, "y", 0, 100);
  light.add(spotLight.position, "z", 0, 100);
  // light.open();

  // var cameraGui = gui.addFolder('camera');
  // cameraGui.add(camera.position, 'x', 0, 50);
  // cameraGui.add(camera.position, 'y', 0, 50);
  // cameraGui.add(camera.position, 'z', 0, 50);

  // var settings = {
  //     'enable Controls': false
  // };
  // var folder1 = gui.addFolder('enableControls');
  // folder1.add(settings, 'enable Controls').onChange(setEnableControls);
  // folder1.open();

  // function setEnableControls(enableControls) {
  //     // enableControls = enableControls;
  //     isControlEnable = enableControls;
  //     if (isControlEnable == true) {
  //         controls = new THREE.OrbitControls(camera, renderer.domElement);
  //         controls.update();
  //     }
  // }

  //#region Controls

  // var controls = new THREE.OrbitControls(camera, renderer.domElement);
  // controls.update();

  //# endregion

  var animate = function() {
    if (RESOURCES_LOADED == false) {
      requestAnimationFrame(animate);

      renderer.render(loadingScreen.scene, loadingScreen.camera);
      return;
    }

    if (nav == false) {
      var delta = clock.getDelta();
      // charMovement(delta);

      renderer.render(scene, camera);

      //   if (isControlEnable == true) {
      //     controls.update();
      //     // TWEEN.update();
      //   }

      if (cv == true) {
        // if(startingHolo == false){
        //     setTimeout(function(){setShowHoloTimeout()},2000);
        // }
        // controls.update();
        if (moveToLocation == true) {
          moveToNewLocation(true);
          // TWEEN.update();
        }
        camera.lookAt(objectByName.position);
        camera.updateMatrixWorld();
        spotLight.position.set(
          3 + objectByName.position.x,
          14,
          12 + objectByName.position.z
        );
        spotLight.target.position.set(
          objectByName.position.x,
          objectByName.position.y,
          objectByName.position.z
        );
        spotLight.target.lookAt(camera);

        spotLight.target.updateMatrix();
        spotLight.target.updateMatrixWorld();
      }

      if (hobby == true) {
        camera.position.set(20.8, 20, 20 - 0.8); // all components equal
        camera.lookAt(scene.position); // or the origin
        camera.updateMatrixWorld();

        // spotLight.position.set(3, 14, 12);
        // spotLight.lookAt(camera);

        // spotLight.updateMatrix();
        // spotLight.updateMatrixWorld();
      }
      if (tweenUpdate == true) {
        TWEEN.update();
      }
      // TWEEN.update();
      // camera.lookAt(objectByName.position);
      requestAnimationFrame(function() {
        animate(renderer, scene, camera);
      });
    }
  };
  animate();
}

function showInformation() {
  $(".ui-information-wrapper").css({ display: "flex" });
  $(".ui-information-wrapper").addClass("ui-information--bounce");
}

function onWindowResize() {
  var aspect = window.innerWidth / window.innerHeight;

  camera.left = -d * aspect;
  camera.right = d * aspect;
  camera.top = d;
  camera.bottom = -d;

  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

export {
  renderInit,
  startingSmokeAnimation,
  newPositionSmoke,
  showInformation,
  camera,
  scene,
  objectByName
};
