import { scene, smoke } from "./renderInit";
import { lunarLandingAnimation } from "./tweenObject";
import { showInformationForHolo } from "./holoFrame";

var models = {
  lunar: {
    glb: "./assets/dist/object/lunar/lunar.glb",
    name: "lunar",
    mesh: null
  },
  lunarSurface: {
    glb: "./assets/dist/object/lunarsurface/moonSurface.glb",
    name: "lunar_surface",
    mesh: null
  },
  friTree: {
    glb: "./assets/dist/object/tree/fri/friTree.glb",
    name: "fri_tree",
    mesh: null
  },
  LowTree: {
    glb: "./assets/dist/object/tree/low-poly-tree/lowPolyTree.glb",
    name: "low_tree",
    mesh: null
  },
  street: {
    glb: "./assets/dist/object/street/street.glb",
    name: "street",
    mesh: null
  },

  home: {
    glb: "./assets/dist/object/building/home.glb",
    name: "home",
    mesh: null
  },
  char: {
    glb: "./assets/dist/object/char/char.glb",
    name: "char",
    mesh: null
  },
  gras: {
    glb: "./assets/dist/object/enviroment/gras.glb",
    name: "gras",
    mesh: null
  },
  smoke: {
    glb: "./assets/dist/object/smoke/smoke.glb",
    name: "smoke",
    mesh: null
  },
  holopod: {
    glb: "./assets/dist/object/holopod/holopod.glb",
    name: "holopod",
    mesh: null
  },
  charHolo: {
    glb: "./assets/dist/object/char/char_holo_03.glb",
    name: "charHolo",
    mesh: null
  },
  fes: {
    glb: "./assets/dist/object/building/fes.glb",
    name: "fes",
    mesh: null
  },
  br294: {
    glb: "./assets/dist/object/db/br294/br294.glb",
    name: "br294",
    mesh: null
  },
  vehicle01: {
    glb: "./assets/dist/object/db/vehicle/frigth_vehicle_01.glb",
    name: "vehicle01",
    mesh: null
  },
  vehicle02: {
    glb: "./assets/dist/object/db/vehicle/frigth_vehicle_02.glb",
    name: "vehicle02",
    mesh: null
  },
  vehicle03: {
    glb: "./assets/dist/object/db/vehicle/frigth_vehicle_03.glb",
    name: "vehicle03",
    mesh: null
  },
  track: {
    glb: "./assets/dist/object/db/track/track.glb",
    name: "track",
    mesh: null
  },
  br185: {
    glb: "./assets/dist/object/db/br185/br185.glb",
    name: "br185",
    mesh: null
  },
  tschool: {
    glb: "./assets/dist/object/building/tschool.glb",
    name: "tschool",
    mesh: null
  },
  afk: {
    glb: "./assets/dist/object/building/afk.glb",
    name: "afk",
    mesh: null
  },
  hfu: {
    glb: "./assets/dist/object/building/hfu.glb",
    name: "hfu",
    mesh: null
  },
  dslr: {
    glb: "./assets/dist/object/hobby/camera/camera.glb",
    name: "dslr",
    mesh: null
  },
  gaming: {
    glb: "./assets/dist/object/hobby/gaming/gaming.glb",
    name: "gaming",
    mesh: null
  },
  swimming: {
    glb: "./assets/dist/object/hobby/swimming/rhy_swimming.glb",
    name: "swimming",
    mesh: null
  },
  snowboard: {
    glb: "./assets/dist/object/hobby/snowboard/snowboard.glb",
    name: "snowboard",
    mesh: null
  }
};

var meshes = {};
var objectByName;

var LOADING_MANAGER = null;
var RESOURCES_LOADED = false;

var loadingManager = new THREE.LoadingManager();

loadingManager.onProgress = function(item, loaded, total) {
  console.log(item, loaded, total);
};

loadingManager.onLoad = function() {
  console.log("loaded all resources");
  RESOURCES_LOADED = true;
  onResourcesLoad();
};

function objectLoad() {
  for (var _key in models) {
    (function(key) {
      var loader = new THREE.GLTFLoader(loadingManager);
      loader.load(models[key].glb, function(gltf) {
        var mesh = gltf.scene;
        mesh.traverse(function(object) {
          if (object.isMesh) object.castShadow = true;
        });
        mesh.name = '"' + models[key].name + '"';
        models[key].mesh = mesh;
      });
    })(_key);
  }
}

function onResourcesLoad() {
  meshes["lunar"] = models.lunar.mesh.clone();
  meshes["lunar"].position.set(0, 6, 0);
  meshes["lunar"].scale.set(0.5, 0.5, 0.5);
  meshes["lunar_surface"] = models.lunarSurface.mesh.clone();
  meshes["lunar_surface"].scale.set(0.5, 0.5, 0.5);
  scene.add(meshes["lunar"]);
  scene.add(meshes["lunar_surface"]);
  lunarLandingAnimation();
}

function loadCV() {
  scene.remove(meshes["lunar"]);
  scene.remove(meshes["lunar_surface"]);

  scene.remove(meshes["dslr01"]);
  scene.remove(meshes["swimming"]);
  scene.remove(meshes["gaming"]);
  scene.remove(meshes["snowboard"]);

  meshes["friTree01"] = models.friTree.mesh.clone();
  meshes["friTree02"] = models.friTree.mesh.clone();
  meshes["friTree03"] = models.friTree.mesh.clone();
  meshes["friTree04"] = models.friTree.mesh.clone();
  meshes["lowTree01"] = models.LowTree.mesh.clone();
  meshes["lowTree02"] = models.LowTree.mesh.clone();

  meshes["street00"] = models.street.mesh.clone();
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
  meshes["street11"] = models.street.mesh.clone();
  meshes["street12"] = models.street.mesh.clone();
  meshes["street13"] = models.street.mesh.clone();
  meshes["street14"] = models.street.mesh.clone();
  meshes["street15"] = models.street.mesh.clone();
  meshes["street16"] = models.street.mesh.clone();
  meshes["street17"] = models.street.mesh.clone();
  meshes["street18"] = models.street.mesh.clone();
  meshes["street19"] = models.street.mesh.clone();
  meshes["street20"] = models.street.mesh.clone();
  meshes["street21"] = models.street.mesh.clone();
  meshes["street22"] = models.street.mesh.clone();
  meshes["street23"] = models.street.mesh.clone();
  meshes["street24"] = models.street.mesh.clone();
  meshes["street25"] = models.street.mesh.clone();
  meshes["street26"] = models.street.mesh.clone();
  meshes["street27"] = models.street.mesh.clone();
  meshes["street28"] = models.street.mesh.clone();
  meshes["street29"] = models.street.mesh.clone();
  meshes["street30"] = models.street.mesh.clone();
  meshes["street31"] = models.street.mesh.clone();
  meshes["street32"] = models.street.mesh.clone();
  meshes["street33"] = models.street.mesh.clone();
  meshes["street34"] = models.street.mesh.clone();
  meshes["street35"] = models.street.mesh.clone();
  meshes["street36"] = models.street.mesh.clone();

  meshes["home"] = models.home.mesh.clone();
  meshes["char"] = models.char.mesh.clone();
  meshes["gras01"] = models.gras.mesh.clone();
  meshes["gras02"] = models.gras.mesh.clone();
  meshes["gras03"] = models.gras.mesh.clone();
  meshes["gras04"] = models.gras.mesh.clone();
  meshes["gras05"] = models.gras.mesh.clone();
  meshes["gras06"] = models.gras.mesh.clone();
  meshes["gras07"] = models.gras.mesh.clone();
  meshes["gras08"] = models.gras.mesh.clone();
  meshes["gras09"] = models.gras.mesh.clone();
  meshes["gras10"] = models.gras.mesh.clone();
  meshes["gras11"] = models.gras.mesh.clone();
  meshes["gras12"] = models.gras.mesh.clone();
  meshes["gras13"] = models.gras.mesh.clone();
  meshes["gras14"] = models.gras.mesh.clone();
  meshes["gras15"] = models.gras.mesh.clone();
  meshes["gras16"] = models.gras.mesh.clone();
  meshes["gras17"] = models.gras.mesh.clone();
  meshes["gras18"] = models.gras.mesh.clone();
  meshes["gras19"] = models.gras.mesh.clone();
  meshes["gras20"] = models.gras.mesh.clone();
  meshes["gras21"] = models.gras.mesh.clone();
  meshes["gras22"] = models.gras.mesh.clone();
  meshes["gras23"] = models.gras.mesh.clone();
  meshes["gras24"] = models.gras.mesh.clone();
  meshes["gras25"] = models.gras.mesh.clone();
  meshes["gras26"] = models.gras.mesh.clone();
  meshes["gras27"] = models.gras.mesh.clone();
  meshes["gras28"] = models.gras.mesh.clone();
  meshes["gras29"] = models.gras.mesh.clone();
  meshes["gras30"] = models.gras.mesh.clone();
  meshes["gras31"] = models.gras.mesh.clone();
  meshes["gras32"] = models.gras.mesh.clone();
  meshes["gras33"] = models.gras.mesh.clone();
  meshes["gras34"] = models.gras.mesh.clone();
  meshes["gras35"] = models.gras.mesh.clone();
  meshes["gras36"] = models.gras.mesh.clone();

  meshes["fes"] = models.fes.mesh.clone();
  meshes["br294"] = models.br294.mesh.clone();
  meshes["br185"] = models.br185.mesh.clone();
  meshes["vehicle01"] = models.vehicle01.mesh.clone();
  meshes["vehicle02"] = models.vehicle02.mesh.clone();
  meshes["vehicle03"] = models.vehicle03.mesh.clone();
  meshes["track01"] = models.track.mesh.clone();
  meshes["track02"] = models.track.mesh.clone();
  meshes["track03"] = models.track.mesh.clone();
  meshes["track04"] = models.track.mesh.clone();
  meshes["track05"] = models.track.mesh.clone();
  meshes["track06"] = models.track.mesh.clone();
  meshes["track07"] = models.track.mesh.clone();

  meshes["tschool"] = models.tschool.mesh.clone();
  meshes["afk"] = models.afk.mesh.clone();
  meshes["hfu"] = models.hfu.mesh.clone();

  meshes["holopod00"] = models.holopod.mesh.clone();
  meshes["holopod01"] = models.holopod.mesh.clone();
  meshes["holopod02"] = models.holopod.mesh.clone();
  meshes["holopod03"] = models.holopod.mesh.clone();
  meshes["holopod04"] = models.holopod.mesh.clone();
  meshes["holopod05"] = models.holopod.mesh.clone();
  meshes["holopod06"] = models.holopod.mesh.clone();
  // meshes["holopod07"] = models.holopod.mesh.clone();

  meshes["charHolo"] = models.charHolo.mesh.clone();

  meshes["friTree01"].position.set(0.5, 0, 2);
  meshes["friTree02"].position.set(-0.5, 0, 1.5);
  meshes["friTree03"].position.set(3, 0, 1.5);
  meshes["friTree04"].position.set(4, 0, 2.5);

  meshes["lowTree01"].position.set(2, 0, 2.5);
  meshes["lowTree02"].position.set(5, 0, 1.5);
  meshes["lowTree01"].rotation.y = -Math.PI / 2;
  meshes["lowTree01"].scale.set(0.5, 0.5, 0.5);
  meshes["lowTree02"].scale.set(0.5, 0.5, 0.5);

  meshes["street00"].position.set(-6, 0.1, 0);
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
  meshes["street11"].position.set(16, 0.1, 0);
  meshes["street12"].position.set(18, 0.1, 0);
  meshes["street13"].position.set(20, 0.1, 0);
  meshes["street14"].position.set(22, 0.1, 0);
  meshes["street15"].position.set(24, 0.1, 0);
  meshes["street16"].position.set(26, 0.1, 0);
  meshes["street17"].position.set(28, 0.1, 0);
  meshes["street18"].position.set(30, 0.1, 0);
  meshes["street19"].position.set(32, 0.1, 0);
  meshes["street20"].position.set(34, 0.1, 0);
  meshes["street21"].position.set(36, 0.1, 0);
  meshes["street22"].position.set(38, 0.1, 0);
  meshes["street23"].position.set(40, 0.1, 0);
  meshes["street24"].position.set(42, 0.1, 0);
  meshes["street25"].position.set(44, 0.1, 0);
  meshes["street26"].position.set(46, 0.1, 0);
  meshes["street27"].position.set(48, 0.1, 0);
  meshes["street28"].position.set(50, 0.1, 0);
  meshes["street29"].position.set(52, 0.1, 0);
  meshes["street30"].position.set(54, 0.1, 0);
  meshes["street31"].position.set(56, 0.1, 0);
  meshes["street32"].position.set(58, 0.1, 0);
  meshes["street33"].position.set(60, 0.1, 0);
  meshes["street34"].position.set(62, 0.1, 0);
  meshes["street35"].position.set(64, 0.1, 0);
  meshes["street36"].position.set(66, 0.1, 0);

  meshes["gras01"].position.set(-4, 0.1, 2);
  meshes["gras02"].position.set(-2, 0.1, 2);
  meshes["gras03"].position.set(0, 0.1, 2);
  meshes["gras04"].position.set(2, 0.1, 2);
  meshes["gras05"].position.set(4, 0.1, 2);
  meshes["gras06"].position.set(6, 0.1, 2);
  meshes["gras07"].position.set(8, 0.1, 2);
  meshes["gras08"].position.set(10, 0.1, 2);
  meshes["gras09"].position.set(12, 0.1, 2);
  meshes["gras10"].position.set(14, 0.1, 2);
  meshes["gras11"].position.set(16, 0.1, 2);
  meshes["gras12"].position.set(18, 0.1, 2);
  meshes["gras13"].position.set(20, 0.1, 2);
  meshes["gras14"].position.set(22, 0.1, 2);
  meshes["gras15"].position.set(24, 0.1, 2);
  meshes["gras16"].position.set(26, 0.1, 2);
  meshes["gras17"].position.set(28, 0.1, 2);
  meshes["gras18"].position.set(30, 0.1, 2);
  meshes["gras19"].position.set(32, 0.1, 2);
  meshes["gras20"].position.set(34, 0.1, 2);
  meshes["gras21"].position.set(36, 0.1, 2);
  meshes["gras22"].position.set(38, 0.1, 2);
  meshes["gras23"].position.set(40, 0.1, 2);
  meshes["gras24"].position.set(42, 0.1, 2);
  meshes["gras25"].position.set(44, 0.1, 2);
  meshes["gras26"].position.set(46, 0.1, 2);
  meshes["gras27"].position.set(48, 0.1, 2);
  meshes["gras28"].position.set(50, 0.1, 2);
  meshes["gras29"].position.set(52, 0.1, 2);
  meshes["gras30"].position.set(54, 0.1, 2);
  meshes["gras31"].position.set(56, 0.1, 2);
  meshes["gras32"].position.set(58, 0.1, 2);
  meshes["gras33"].position.set(60, 0.1, 2);
  meshes["gras34"].position.set(62, 0.1, 2);
  meshes["gras35"].position.set(64, 0.1, 2);
  meshes["gras36"].position.set(66, 0.1, 2);

  meshes["home"].position.set(1, 0.05, -3);
  meshes["home"].scale.set(2, 2, 2);

  meshes["fes"].position.set(10, 1, -4);
  meshes["br294"].position.set(20, 1, -2);
  meshes["br294"].scale.set(0.25, 0.25, 0.25);
  meshes["vehicle01"].position.set(22.41, 1, -2);
  meshes["vehicle01"].scale.set(0.25, 0.25, 0.25);

  meshes["vehicle02"].position.set(25.18, 1, -2);
  meshes["vehicle02"].scale.set(0.25, 0.25, 0.25);

  meshes["vehicle03"].position.set(27.95, 1, -2);
  meshes["vehicle03"].scale.set(0.25, 0.25, 0.25);

  meshes["br185"].position.set(30.72, 1, -2);
  meshes["br185"].scale.set(0.25, 0.25, 0.25);

  meshes["track01"].position.set(20, 1, -2);
  meshes["track01"].scale.set(0.25, 0.25, 0.25);

  meshes["track02"].position.set(23, 1, -2);
  meshes["track02"].scale.set(0.25, 0.25, 0.25);

  meshes["track03"].position.set(26, 1, -2);
  meshes["track03"].scale.set(0.25, 0.25, 0.25);

  meshes["track04"].position.set(29, 1, -2);
  meshes["track04"].scale.set(0.25, 0.25, 0.25);

  meshes["track05"].position.set(32, 1, -2);
  meshes["track05"].scale.set(0.25, 0.25, 0.25);
  meshes["track06"].position.set(35, 1, -2);
  meshes["track06"].scale.set(0.25, 0.25, 0.25);
  meshes["track07"].position.set(38, 1, -2);
  meshes["track07"].scale.set(0.25, 0.25, 0.25);

  // meshes["fes"].scale.set(2, 2, 2);

  meshes["char"].position.set(0.8, 0.25, -0.8);
  meshes["char"].rotation.y = -Math.PI / 2;

  meshes["charHolo"].position.set(0.8, 0.25, -0.79);
  meshes["charHolo"].scale.set(1.5, 1.25, 1.5);
  meshes["charHolo"].rotation.y = -Math.PI / 2;

  meshes["holopod00"].scale.set(0.15, 0.15, 0.15);
  meshes["holopod00"].position.set(0.8, 0.2, -0.8);

  meshes["holopod01"].scale.set(0.15, 0.15, 0.15);
  meshes["holopod02"].scale.set(0.15, 0.15, 0.15);
  meshes["holopod03"].scale.set(0.15, 0.15, 0.15);
  meshes["holopod04"].scale.set(0.15, 0.15, 0.15);
  meshes["holopod05"].scale.set(0.15, 0.15, 0.15);
  meshes["holopod06"].scale.set(0.15, 0.15, 0.15);

  meshes["holopod01"].position.set(10, 0.2, -0.8);
  meshes["holopod02"].position.set(20, 0.2, -0.8);
  meshes["holopod03"].position.set(30, 0.2, -0.8);
  meshes["holopod04"].position.set(40, 0.2, -0.8);
  meshes["holopod05"].position.set(50, 0.2, -0.8);
  meshes["holopod06"].position.set(60, 0.2, -0.8);

  // To Do - Richtige Positionierung der Tschool und der HFU
  meshes["tschool"].position.set(40, 0.2, -4);
  meshes["tschool"].rotation.y = -Math.PI;
  meshes["afk"].position.set(50, 0.2, -3);
  meshes["afk"].rotation.y = -Math.PI / 2;
  meshes["hfu"].position.set(60, 0.2, -3);
  meshes["hfu"].rotation.y = -Math.PI / 2;
  meshes["hfu"].scale.set(0.5, 0.5, 0.5);

  scene.add(meshes["friTree01"]);
  scene.add(meshes["friTree02"]);
  scene.add(meshes["friTree03"]);
  scene.add(meshes["friTree04"]);
  scene.add(meshes["lowTree01"]);
  scene.add(meshes["lowTree02"]);

  scene.add(meshes["street00"]);
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
  scene.add(meshes["street11"]);
  scene.add(meshes["street12"]);
  scene.add(meshes["street13"]);
  scene.add(meshes["street14"]);
  scene.add(meshes["street15"]);
  scene.add(meshes["street16"]);
  scene.add(meshes["street17"]);
  scene.add(meshes["street18"]);
  scene.add(meshes["street19"]);
  scene.add(meshes["street20"]);
  scene.add(meshes["street21"]);
  scene.add(meshes["street22"]);
  scene.add(meshes["street23"]);
  scene.add(meshes["street24"]);
  scene.add(meshes["street25"]);
  scene.add(meshes["street26"]);
  scene.add(meshes["street27"]);
  scene.add(meshes["street28"]);
  scene.add(meshes["street29"]);
  scene.add(meshes["street30"]);
  scene.add(meshes["street31"]);
  scene.add(meshes["street32"]);
  scene.add(meshes["street33"]);
  scene.add(meshes["street34"]);
  scene.add(meshes["street35"]);
  scene.add(meshes["street36"]);

  scene.add(meshes["home"]);
  scene.add(meshes["fes"]);
  scene.add(meshes["char"]);
  scene.add(meshes["charHolo"]);
  scene.add(meshes["holopod00"]);

  scene.add(meshes["gras01"]);
  scene.add(meshes["gras02"]);
  scene.add(meshes["gras03"]);
  scene.add(meshes["gras04"]);
  scene.add(meshes["gras05"]);
  scene.add(meshes["gras06"]);
  scene.add(meshes["gras07"]);
  scene.add(meshes["gras08"]);
  scene.add(meshes["gras09"]);
  scene.add(meshes["gras10"]);
  scene.add(meshes["gras11"]);
  scene.add(meshes["gras12"]);
  scene.add(meshes["gras13"]);
  scene.add(meshes["gras14"]);
  scene.add(meshes["gras15"]);
  scene.add(meshes["gras16"]);
  scene.add(meshes["gras17"]);
  scene.add(meshes["gras18"]);
  scene.add(meshes["gras19"]);
  scene.add(meshes["gras20"]);
  scene.add(meshes["gras21"]);
  scene.add(meshes["gras22"]);
  scene.add(meshes["gras23"]);
  scene.add(meshes["gras24"]);
  scene.add(meshes["gras25"]);
  scene.add(meshes["gras26"]);
  scene.add(meshes["gras27"]);
  scene.add(meshes["gras28"]);
  scene.add(meshes["gras29"]);
  scene.add(meshes["gras30"]);
  scene.add(meshes["gras31"]);
  scene.add(meshes["gras32"]);
  scene.add(meshes["gras33"]);
  scene.add(meshes["gras34"]);
  scene.add(meshes["gras35"]);
  scene.add(meshes["gras36"]);

  scene.add(meshes["holopod01"]);
  scene.add(meshes["holopod02"]);
  scene.add(meshes["holopod03"]);
  scene.add(meshes["holopod04"]);
  scene.add(meshes["holopod05"]);
  scene.add(meshes["holopod06"]);
  scene.add(meshes["br294"]);
  scene.add(meshes["br185"]);
  scene.add(meshes["vehicle01"]);
  scene.add(meshes["vehicle02"]);
  scene.add(meshes["vehicle03"]);
  scene.add(meshes["track01"]);
  scene.add(meshes["track02"]);
  scene.add(meshes["track03"]);
  scene.add(meshes["track04"]);
  scene.add(meshes["track05"]);

  scene.add(meshes["tschool"]);
  scene.add(meshes["afk"]);
  scene.add(meshes["hfu"]);

  objectByName = meshes["char"];
  objectByName.visible = false;
  meshes["charHolo"].visible = false;

  console.log(objectByName.position);
  showInformationForHolo();
}

function loadHobbys() {
  scene.remove(meshes["lunar"]);
  scene.remove(meshes["lunar_surface"]);

  scene.remove(meshes["friTree01"]);
  scene.remove(meshes["friTree02"]);
  scene.remove(meshes["friTree03"]);
  scene.remove(meshes["friTree04"]);
  scene.remove(meshes["lowTree01"]);
  scene.remove(meshes["lowTree02"]);

  scene.remove(meshes["street00"]);
  scene.remove(meshes["street01"]);
  scene.remove(meshes["street02"]);
  scene.remove(meshes["street03"]);
  scene.remove(meshes["street04"]);
  scene.remove(meshes["street05"]);
  scene.remove(meshes["street06"]);
  scene.remove(meshes["street07"]);
  scene.remove(meshes["street08"]);
  scene.remove(meshes["street09"]);
  scene.remove(meshes["street10"]);
  scene.remove(meshes["street11"]);
  scene.remove(meshes["street12"]);
  scene.remove(meshes["street13"]);
  scene.remove(meshes["street14"]);
  scene.remove(meshes["street15"]);
  scene.remove(meshes["street16"]);
  scene.remove(meshes["street17"]);
  scene.remove(meshes["street18"]);
  scene.remove(meshes["street19"]);
  scene.remove(meshes["street20"]);
  scene.remove(meshes["street21"]);
  scene.remove(meshes["street22"]);
  scene.remove(meshes["street23"]);
  scene.remove(meshes["street24"]);
  scene.remove(meshes["street25"]);
  scene.remove(meshes["street26"]);
  scene.remove(meshes["street27"]);
  scene.remove(meshes["street28"]);
  scene.remove(meshes["street29"]);
  scene.remove(meshes["street30"]);
  scene.remove(meshes["street31"]);
  scene.remove(meshes["street32"]);
  scene.remove(meshes["street33"]);
  scene.remove(meshes["street34"]);
  scene.remove(meshes["street35"]);
  scene.remove(meshes["street36"]);

  scene.remove(meshes["home"]);
  scene.remove(meshes["fes"]);
  scene.remove(meshes["char"]);
  scene.remove(meshes["charHolo"]);
  scene.remove(meshes["holopod00"]);

  scene.remove(meshes["gras01"]);
  scene.remove(meshes["gras02"]);
  scene.remove(meshes["gras03"]);
  scene.remove(meshes["gras04"]);
  scene.remove(meshes["gras05"]);
  scene.remove(meshes["gras06"]);

  scene.remove(meshes["holopod01"]);
  scene.remove(meshes["holopod02"]);
  scene.remove(meshes["holopod03"]);
  scene.remove(meshes["holopod04"]);
  scene.remove(meshes["holopod05"]);
  scene.remove(meshes["holopod06"]);
  scene.remove(meshes["br294"]);
  scene.remove(meshes["br185"]);
  scene.remove(meshes["vehicle01"]);
  scene.remove(meshes["vehicle02"]);
  scene.remove(meshes["vehicle03"]);
  scene.remove(meshes["track01"]);
  scene.remove(meshes["track02"]);
  scene.remove(meshes["track03"]);
  scene.remove(meshes["track04"]);
  scene.remove(meshes["track05"]);
  scene.remove(meshes["track06"]);
  scene.remove(meshes["track07"]);

  scene.remove(meshes["tschool"]);
  scene.remove(meshes["afk"]);
  scene.remove(meshes["hfu"]);

  meshes["dslr01"] = models.dslr.mesh.clone();
  meshes["swimming"] = models.swimming.mesh.clone();
  meshes["gaming"] = models.gaming.mesh.clone();

  meshes["snowboard"] = models.snowboard.mesh.clone();

  meshes["dslr01"].position.set(0, 0, -2);
  meshes["dslr01"].scale.set(0.25, 0.25, 0.25);

  meshes["gaming"].position.set(-2, 0, 0);
  meshes["gaming"].scale.set(0.25, 0.25, 0.25);

  meshes["snowboard"].position.set(-2, 0, -1);
  // meshes["swimming"].rotation.y = -Math.PI/2;

  scene.add(meshes["dslr01"]);
  scene.add(meshes["swimming"]);
  scene.add(meshes["gaming"]);
  scene.add(meshes["snowboard"]);
}

// function onResourcesLoad() {
//     meshes["friTree01"] = models.friTree.mesh.clone();
//     meshes["friTree02"] = models.friTree.mesh.clone();
//     meshes["friTree03"] = models.friTree.mesh.clone();
//     meshes["friTree04"] = models.friTree.mesh.clone();
//     meshes["lowTree01"] = models.LowTree.mesh.clone();
//     meshes["lowTree02"] = models.LowTree.mesh.clone();
//     meshes["street01"] = models.street.mesh.clone();
//     meshes["street02"] = models.street.mesh.clone();
//     meshes["street03"] = models.street.mesh.clone();
//     meshes["street04"] = models.street.mesh.clone();
//     meshes["street05"] = models.street.mesh.clone();
//     meshes["street06"] = models.street.mesh.clone();
//     meshes["street07"] = models.street.mesh.clone();
//     meshes["street08"] = models.street.mesh.clone();
//     meshes["street09"] = models.street.mesh.clone();
//     meshes["street10"] = models.street.mesh.clone();
//     meshes["home"] = models.home.mesh.clone();
//     meshes["char"] = models.char.mesh.clone();
//     meshes["gras01"] = models.gras.mesh.clone();
//     meshes["gras02"] = models.gras.mesh.clone();
//     meshes["gras03"] = models.gras.mesh.clone();
//     meshes["gras04"] = models.gras.mesh.clone();
//     meshes["gras05"] = models.gras.mesh.clone();
//     meshes["gras06"] = models.gras.mesh.clone();

//     meshes["smoke00"] = models.smoke.mesh.clone();
//     meshes["smoke01"] = models.smoke.mesh.clone();
//     meshes["smoke02"] = models.smoke.mesh.clone();
//     meshes["smoke03"] = models.smoke.mesh.clone();
//     meshes["smoke04"] = models.smoke.mesh.clone();

//     meshes["friTree01"].position.set(0.5, 0, 2);
//     meshes["friTree02"].position.set(-0.5, 0, 1.5);
//     meshes["friTree03"].position.set(3, 0, 1.5);
//     meshes["friTree04"].position.set(4, 0, 2.5);

//     meshes["lowTree01"].position.set(2, 0, 2.5);
//     meshes["lowTree02"].position.set(5, 0, 1.5);
//     meshes["lowTree01"].rotation.y = -Math.PI / 2;
//     meshes["lowTree01"].scale.set(0.5, 0.5, 0.5);
//     meshes["lowTree02"].scale.set(0.5, 0.5, 0.5);

//     meshes["street01"].position.set(-4, 0.1, 0);
//     meshes["street02"].position.set(-2, 0.1, 0);
//     meshes["street03"].position.set(0, 0.1, 0);
//     meshes["street04"].position.set(2, 0.1, 0);
//     meshes["street05"].position.set(4, 0.1, 0);
//     meshes["street06"].position.set(6, 0.1, 0);
//     meshes["street07"].position.set(8, 0.1, 0);
//     meshes["street08"].position.set(10, 0.1, 0);
//     meshes["street09"].position.set(12, 0.1, 0);
//     meshes["street10"].position.set(14, 0.1, 0);

//     meshes["gras01"].position.set(-4, 0.1, 2);
//     meshes["gras02"].position.set(-2, 0.1, 2);
//     meshes["gras03"].position.set(0, 0.1, 2);
//     meshes["gras04"].position.set(2, 0.1, 2);
//     meshes["gras05"].position.set(4, 0.1, 2);
//     meshes["gras06"].position.set(6, 0.1, 2);

//     meshes["home"].position.set(1, 0.05, -3);
//     meshes["home"].scale.set(2, 2, 2);

//     meshes["char"].position.set(0.8, 0.17, -0.8);
//     meshes["char"].rotation.y = -Math.PI / 2;

//     // meshes["smoke00"].position.set(0.8, 0.5, -0.8);
//     meshes["smoke00"].position.set(0.8, -2.5 + 1.5, -0.8);
//     meshes["smoke00"].scale.set(0.5, 0.5, 0.5);

//     meshes["smoke01"].position.set(0.8, -2.5 + 1.7, -1);
//     meshes["smoke01"].scale.set(0.45, 0.45, 0.45);

//     meshes["smoke02"].position.set(0.8, -2.5 + 1.8, -0.5);
//     meshes["smoke02"].scale.set(0.3, 0.3, 0.3);

//     meshes["smoke03"].position.set(0.8, -2.5 + 2, -0.8);
//     meshes["smoke03"].scale.set(0.25, 0.25, 0.25);

//     meshes["smoke04"].position.set(0.7, -2.5 + 2.2, -0.9);
//     meshes["smoke04"].scale.set(0.2, 0.2, 0.2);

//     meshes["lunar"].position.set(0.8, 2, -0.8)

//     meshes["char"].rotation.y = -45 * Math.PI / 180;
//     meshes["char"].scale.set(0.05, 0.05, 0.05);

//     scene.add(meshes["friTree01"]);
//     scene.add(meshes["friTree02"]);
//     scene.add(meshes["friTree03"]);
//     scene.add(meshes["friTree04"]);
//     scene.add(meshes["lowTree01"]);
//     scene.add(meshes["lowTree02"]);
//     scene.add(meshes["street01"]);
//     scene.add(meshes["street02"]);
//     scene.add(meshes["street03"]);
//     scene.add(meshes["street04"]);
//     scene.add(meshes["street05"]);
//     scene.add(meshes["street06"]);
//     scene.add(meshes["street07"]);
//     scene.add(meshes["street08"]);
//     scene.add(meshes["street09"]);
//     scene.add(meshes["street10"]);
//     scene.add(meshes["home"]);
//     scene.add(meshes["char"]);
//     scene.add(meshes["gras01"]);
//     scene.add(meshes["gras02"]);
//     scene.add(meshes["gras03"]);
//     scene.add(meshes["gras04"]);
//     scene.add(meshes["gras05"]);
//     scene.add(meshes["gras06"]);

//     scene.add(meshes["smoke00"]);
//     scene.add(meshes["smoke01"]);
//     scene.add(meshes["smoke02"]);
//     scene.add(meshes["smoke03"]);
//     scene.add(meshes["smoke04"]);

//     for (let index = 0; index < 5; index++) {
//         smoke[index] = meshes["smoke0" + [index]];

//     }

//     objectByName = meshes["char"];
//     objectByName.visible = false;

//     console.log(objectByName.position);

// }

export {
  objectLoad,
  loadCV,
  loadHobbys,
  onResourcesLoad,
  RESOURCES_LOADED,
  objectByName,
  meshes
};
