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
  asphalt: {
    glb: "./assets/dist/object/enviroment/asphalt.glb",
    name: "asphalt",
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

  meshes["asGras00"] = models.gras.mesh.clone();
  meshes["asGras01"] = models.gras.mesh.clone();
  meshes["asGras02"] = models.gras.mesh.clone();
  meshes["asGras03"] = models.gras.mesh.clone();
  meshes["asGras04"] = models.gras.mesh.clone();
  meshes["asGras05"] = models.gras.mesh.clone();
  meshes["asGras06"] = models.gras.mesh.clone();
  meshes["asGras07"] = models.gras.mesh.clone();
  meshes["asGras08"] = models.gras.mesh.clone();
  meshes["asGras09"] = models.gras.mesh.clone();

  meshes["asGras001"] = models.gras.mesh.clone();
  meshes["asGras011"] = models.gras.mesh.clone();
  meshes["asGras021"] = models.gras.mesh.clone();
  meshes["asGras031"] = models.gras.mesh.clone();
  meshes["asGras041"] = models.gras.mesh.clone();
  meshes["asGras051"] = models.gras.mesh.clone();
  meshes["asGras061"] = models.gras.mesh.clone();
  meshes["asGras071"] = models.gras.mesh.clone();
  meshes["asGras081"] = models.gras.mesh.clone();
  meshes["asGras091"] = models.gras.mesh.clone();
  
  meshes["asGras000"] = models.gras.mesh.clone();
  meshes["asGras010"] = models.gras.mesh.clone();
  meshes["asGras020"] = models.gras.mesh.clone();
  meshes["asGras030"] = models.gras.mesh.clone();
  meshes["asGras040"] = models.gras.mesh.clone();
  meshes["asGras050"] = models.gras.mesh.clone();
  meshes["asGras060"] = models.gras.mesh.clone();
  meshes["asGras070"] = models.gras.mesh.clone();
  meshes["asGras080"] = models.gras.mesh.clone();
  meshes["asGras090"] = models.gras.mesh.clone();

  meshes["asphalt00"] = models.asphalt.mesh.clone();
  meshes["asphalt01"] = models.asphalt.mesh.clone();
  meshes["asphalt02"] = models.asphalt.mesh.clone();
  meshes["asphalt03"] = models.asphalt.mesh.clone();
  meshes["asphalt04"] = models.asphalt.mesh.clone();
  meshes["asphalt05"] = models.asphalt.mesh.clone();
  meshes["asphalt06"] = models.asphalt.mesh.clone();
  meshes["asphalt07"] = models.asphalt.mesh.clone();
  meshes["asphalt08"] = models.asphalt.mesh.clone();
  meshes["asphalt09"] = models.asphalt.mesh.clone();
  meshes["asphalt10"] = models.asphalt.mesh.clone();
  meshes["asphalt11"] = models.asphalt.mesh.clone();
  meshes["asphalt12"] = models.asphalt.mesh.clone();
  meshes["asphalt13"] = models.asphalt.mesh.clone();
  meshes["asphalt14"] = models.asphalt.mesh.clone();
  meshes["asphalt15"] = models.asphalt.mesh.clone();
  meshes["asphalt16"] = models.asphalt.mesh.clone();
  meshes["asphalt17"] = models.asphalt.mesh.clone();
  meshes["asphalt18"] = models.asphalt.mesh.clone();
  meshes["asphalt19"] = models.asphalt.mesh.clone();
  meshes["asphalt20"] = models.asphalt.mesh.clone();
  meshes["asphalt21"] = models.asphalt.mesh.clone();
  meshes["asphalt22"] = models.asphalt.mesh.clone();
  meshes["asphalt23"] = models.asphalt.mesh.clone();
  meshes["asphalt24"] = models.asphalt.mesh.clone();

  meshes["asphalt000"] = models.asphalt.mesh.clone();
  meshes["asphalt010"] = models.asphalt.mesh.clone();
  meshes["asphalt020"] = models.asphalt.mesh.clone();
  meshes["asphalt030"] = models.asphalt.mesh.clone();
  meshes["asphalt040"] = models.asphalt.mesh.clone();
  meshes["asphalt050"] = models.asphalt.mesh.clone();
  meshes["asphalt060"] = models.asphalt.mesh.clone();
  meshes["asphalt070"] = models.asphalt.mesh.clone();
  meshes["asphalt080"] = models.asphalt.mesh.clone();
  meshes["asphalt090"] = models.asphalt.mesh.clone();
  meshes["asphalt100"] = models.asphalt.mesh.clone();
  meshes["asphalt110"] = models.asphalt.mesh.clone();
  meshes["asphalt120"] = models.asphalt.mesh.clone();
  meshes["asphalt130"] = models.asphalt.mesh.clone();
  meshes["asphalt140"] = models.asphalt.mesh.clone();
  meshes["asphalt150"] = models.asphalt.mesh.clone();
  meshes["asphalt160"] = models.asphalt.mesh.clone();
  meshes["asphalt170"] = models.asphalt.mesh.clone();
  meshes["asphalt180"] = models.asphalt.mesh.clone();
  meshes["asphalt190"] = models.asphalt.mesh.clone();
  meshes["asphalt200"] = models.asphalt.mesh.clone();
  meshes["asphalt210"] = models.asphalt.mesh.clone();
  meshes["asphalt220"] = models.asphalt.mesh.clone();
  meshes["asphalt230"] = models.asphalt.mesh.clone();
  meshes["asphalt240"] = models.asphalt.mesh.clone();

  meshes["asphalt001"] = models.asphalt.mesh.clone();
  meshes["asphalt011"] = models.asphalt.mesh.clone();
  meshes["asphalt021"] = models.asphalt.mesh.clone();
  meshes["asphalt031"] = models.asphalt.mesh.clone();
  meshes["asphalt041"] = models.asphalt.mesh.clone();
  meshes["asphalt051"] = models.asphalt.mesh.clone();
  meshes["asphalt061"] = models.asphalt.mesh.clone();
  meshes["asphalt071"] = models.asphalt.mesh.clone();
  meshes["asphalt081"] = models.asphalt.mesh.clone();
  meshes["asphalt091"] = models.asphalt.mesh.clone();
  meshes["asphalt101"] = models.asphalt.mesh.clone();
  meshes["asphalt111"] = models.asphalt.mesh.clone();
  meshes["asphalt121"] = models.asphalt.mesh.clone();
  meshes["asphalt131"] = models.asphalt.mesh.clone();
  meshes["asphalt141"] = models.asphalt.mesh.clone();
  meshes["asphalt151"] = models.asphalt.mesh.clone();
  meshes["asphalt161"] = models.asphalt.mesh.clone();
  meshes["asphalt171"] = models.asphalt.mesh.clone();
  meshes["asphalt181"] = models.asphalt.mesh.clone();
  meshes["asphalt191"] = models.asphalt.mesh.clone();
  meshes["asphalt201"] = models.asphalt.mesh.clone();
  meshes["asphalt211"] = models.asphalt.mesh.clone();
  meshes["asphalt221"] = models.asphalt.mesh.clone();
  meshes["asphalt231"] = models.asphalt.mesh.clone();
  meshes["asphalt241"] = models.asphalt.mesh.clone();
  
  meshes["asphalt0202"] = models.asphalt.mesh.clone();
  meshes["asphalt0212"] = models.asphalt.mesh.clone();
 

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

  meshes["asphalt00"].position.set(-4, 0.1, -2);
  meshes["asphalt01"].position.set(-2, 0.1, -2);
  meshes["asphalt02"].position.set(4, 0.1, -2);
  meshes["asphalt03"].position.set(6, 0.1, -2);
  meshes["asphalt04"].position.set(8, 0.1, -2);
  meshes["asphalt05"].position.set(10, 0.1, -2);
  meshes["asphalt06"].position.set(12, 0.1, -2);
  meshes["asphalt07"].position.set(14, 0.1, -2);

  meshes["asphalt000"].position.set(-4, 0.1, -4);
  meshes["asphalt010"].position.set(-2, 0.1, -4);
  meshes["asphalt0202"].position.set(2, 0.1, -4);
  meshes["asphalt020"].position.set(4, 0.1, -4);
  meshes["asphalt030"].position.set(6, 0.1, -4);
  meshes["asphalt040"].position.set(8, 0.1, -4);
  meshes["asphalt050"].position.set(10, 0.1, -4);
  meshes["asphalt060"].position.set(12, 0.1, -4);
  meshes["asphalt070"].position.set(14, 0.1, -4);

  meshes["asphalt001"].position.set(-4, 0.1, -6);
  meshes["asphalt011"].position.set(-2, 0.1, -6);
  meshes["asphalt0212"].position.set(2, 0.1, -6);
  meshes["asphalt021"].position.set(4, 0.1, -6);
  meshes["asphalt031"].position.set(6, 0.1, -6);
  meshes["asphalt041"].position.set(8, 0.1, -6);
  meshes["asphalt051"].position.set(10, 0.1, -6);
  meshes["asphalt061"].position.set(12, 0.1, -6);
  meshes["asphalt071"].position.set(14, 0.1, -6);

  meshes["asGras00"].position.set(16, 0.1, -2);
  meshes["asGras01"].position.set(18, 0.1, -2);
  meshes["asGras02"].position.set(20, 0.1, -2);
  meshes["asGras03"].position.set(22, 0.1, -2);
  meshes["asGras04"].position.set(24, 0.1, -2);
  meshes["asGras05"].position.set(26, 0.1, -2);
  meshes["asGras06"].position.set(28, 0.1, -2);
  meshes["asGras07"].position.set(30, 0.1, -2);
  meshes["asGras08"].position.set(32, 0.1, -2);
  meshes["asGras09"].position.set(34, 0.1, -2);

  meshes["asGras000"].position.set(16, 0.1, -4);
  meshes["asGras010"].position.set(18, 0.1, -4);
  meshes["asGras020"].position.set(20, 0.1, -4);
  meshes["asGras030"].position.set(22, 0.1, -4);
  meshes["asGras040"].position.set(24, 0.1, -4);
  meshes["asGras050"].position.set(26, 0.1, -4);
  meshes["asGras060"].position.set(28, 0.1, -4);
  meshes["asGras070"].position.set(30, 0.1, -4);
  meshes["asGras080"].position.set(32, 0.1, -4);
  meshes["asGras090"].position.set(34, 0.1, -4);

  meshes["asGras001"].position.set(16, 0.1, -6);
  meshes["asGras011"].position.set(18, 0.1, -6);
  meshes["asGras021"].position.set(20, 0.1, -6);
  meshes["asGras031"].position.set(22, 0.1, -6);
  meshes["asGras041"].position.set(24, 0.1, -6);
  meshes["asGras051"].position.set(26, 0.1, -6);
  meshes["asGras061"].position.set(28, 0.1, -6);
  meshes["asGras071"].position.set(30, 0.1, -6);
  meshes["asGras081"].position.set(32, 0.1, -6);
  meshes["asGras091"].position.set(34, 0.1, -6);

  meshes["asphalt09"].position.set(36, 0.1, -2);
  meshes["asphalt10"].position.set(38, 0.1, -2);
  meshes["asphalt11"].position.set(40, 0.1, -2);
  meshes["asphalt12"].position.set(42, 0.1, -2);
  meshes["asphalt13"].position.set(44, 0.1, -2);
  meshes["asphalt14"].position.set(46, 0.1, -2);
  meshes["asphalt21"].position.set(48, 0.1, -2);
  meshes["asphalt15"].position.set(50, 0.1, -2);
  meshes["asphalt16"].position.set(52, 0.1, -2);
  meshes["asphalt17"].position.set(54, 0.1, -2);
  meshes["asphalt18"].position.set(56, 0.1, -2);
  meshes["asphalt19"].position.set(58, 0.1, -2);
  meshes["asphalt20"].position.set(60, 0.1, -2);
  meshes["asphalt22"].position.set(62, 0.1, -2);
  meshes["asphalt23"].position.set(64, 0.1, -2);
  meshes["asphalt24"].position.set(66, 0.1, -2);

  meshes["asphalt090"].position.set(36, 0.1, -4);
  meshes["asphalt100"].position.set(38, 0.1, -4);
  meshes["asphalt110"].position.set(40, 0.1, -4);
  meshes["asphalt120"].position.set(42, 0.1, -4);
  meshes["asphalt130"].position.set(44, 0.1, -4);
  meshes["asphalt140"].position.set(46, 0.1, -4);
  meshes["asphalt210"].position.set(48, 0.1, -4);
  meshes["asphalt150"].position.set(50, 0.1, -4);
  meshes["asphalt160"].position.set(52, 0.1, -4);
  meshes["asphalt170"].position.set(54, 0.1, -4);
  meshes["asphalt180"].position.set(56, 0.1, -4);
  meshes["asphalt190"].position.set(58, 0.1, -4);
  meshes["asphalt200"].position.set(60, 0.1, -4);
  meshes["asphalt220"].position.set(62, 0.1, -4);
  meshes["asphalt230"].position.set(64, 0.1, -4);
  meshes["asphalt240"].position.set(66, 0.1, -4);

  meshes["asphalt091"].position.set(36, 0.1, -6);
  meshes["asphalt101"].position.set(38, 0.1, -6);
  meshes["asphalt111"].position.set(40, 0.1, -6);
  meshes["asphalt121"].position.set(42, 0.1, -6);
  meshes["asphalt131"].position.set(44, 0.1, -6);
  meshes["asphalt141"].position.set(46, 0.1, -6);
  meshes["asphalt211"].position.set(48, 0.1, -6);
  meshes["asphalt151"].position.set(50, 0.1, -6);
  meshes["asphalt161"].position.set(52, 0.1, -6);
  meshes["asphalt171"].position.set(54, 0.1, -6);
  meshes["asphalt181"].position.set(56, 0.1, -6);
  meshes["asphalt191"].position.set(58, 0.1, -6);
  meshes["asphalt201"].position.set(60, 0.1, -6);
  meshes["asphalt221"].position.set(62, 0.1, -6);
  meshes["asphalt231"].position.set(64, 0.1, -6);
  meshes["asphalt241"].position.set(66, 0.1, -6);

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
  meshes["hfu"].position.set(60, 0.7, -3);
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

  scene.add(meshes["asphalt00"]);
  scene.add(meshes["asphalt01"]);
  scene.add(meshes["asphalt02"]);
  scene.add(meshes["asphalt03"]);
  scene.add(meshes["asphalt04"]);
  scene.add(meshes["asphalt05"]);
  scene.add(meshes["asphalt06"]);
  scene.add(meshes["asphalt07"]);
  scene.add(meshes["asphalt08"]);
  scene.add(meshes["asphalt09"]);
  scene.add(meshes["asphalt10"]);
  scene.add(meshes["asphalt11"]);
  scene.add(meshes["asphalt12"]);
  scene.add(meshes["asphalt13"]);
  scene.add(meshes["asphalt14"]);
  scene.add(meshes["asphalt15"]);
  scene.add(meshes["asphalt16"]);
  scene.add(meshes["asphalt17"]);
  scene.add(meshes["asphalt18"]);
  scene.add(meshes["asphalt19"]);
  scene.add(meshes["asphalt20"]);
  scene.add(meshes["asphalt21"]);
  scene.add(meshes["asphalt22"]);
  scene.add(meshes["asphalt23"]);
  scene.add(meshes["asphalt24"]);

  scene.add(meshes["asphalt000"]);
  scene.add(meshes["asphalt010"]);
  scene.add(meshes["asphalt020"]);
  scene.add(meshes["asphalt030"]);
  scene.add(meshes["asphalt040"]);
  scene.add(meshes["asphalt050"]);
  scene.add(meshes["asphalt060"]);
  scene.add(meshes["asphalt070"]);
  scene.add(meshes["asphalt080"]);
  scene.add(meshes["asphalt090"]);
  scene.add(meshes["asphalt100"]);
  scene.add(meshes["asphalt110"]);
  scene.add(meshes["asphalt120"]);
  scene.add(meshes["asphalt130"]);
  scene.add(meshes["asphalt140"]);
  scene.add(meshes["asphalt150"]);
  scene.add(meshes["asphalt160"]);
  scene.add(meshes["asphalt170"]);
  scene.add(meshes["asphalt180"]);
  scene.add(meshes["asphalt190"]);
  scene.add(meshes["asphalt200"]);
  scene.add(meshes["asphalt210"]);
  scene.add(meshes["asphalt220"]);
  scene.add(meshes["asphalt230"]);
  scene.add(meshes["asphalt240"]);
  
  scene.add(meshes["asphalt0202"]);
  scene.add(meshes["asphalt0212"]);

  scene.add(meshes["asphalt001"]);
  scene.add(meshes["asphalt011"]);
  scene.add(meshes["asphalt021"]);
  scene.add(meshes["asphalt031"]);
  scene.add(meshes["asphalt041"]);
  scene.add(meshes["asphalt051"]);
  scene.add(meshes["asphalt061"]);
  scene.add(meshes["asphalt071"]);
  scene.add(meshes["asphalt081"]);
  scene.add(meshes["asphalt091"]);
  scene.add(meshes["asphalt101"]);
  scene.add(meshes["asphalt111"]);
  scene.add(meshes["asphalt121"]);
  scene.add(meshes["asphalt131"]);
  scene.add(meshes["asphalt141"]);
  scene.add(meshes["asphalt151"]);
  scene.add(meshes["asphalt161"]);
  scene.add(meshes["asphalt171"]);
  scene.add(meshes["asphalt181"]);
  scene.add(meshes["asphalt191"]);
  scene.add(meshes["asphalt201"]);
  scene.add(meshes["asphalt211"]);
  scene.add(meshes["asphalt221"]);
  scene.add(meshes["asphalt231"]);
  scene.add(meshes["asphalt241"]);

  scene.add(meshes["asGras00"]);
  scene.add(meshes["asGras01"]);
  scene.add(meshes["asGras02"]);
  scene.add(meshes["asGras03"]);
  scene.add(meshes["asGras04"]);
  scene.add(meshes["asGras05"]);
  scene.add(meshes["asGras06"]);
  scene.add(meshes["asGras07"]);
  scene.add(meshes["asGras08"]);
  scene.add(meshes["asGras09"]);

  scene.add(meshes["asGras000"]);
  scene.add(meshes["asGras010"]);
  scene.add(meshes["asGras020"]);
  scene.add(meshes["asGras030"]);
  scene.add(meshes["asGras040"]);
  scene.add(meshes["asGras050"]);
  scene.add(meshes["asGras060"]);
  scene.add(meshes["asGras070"]);
  scene.add(meshes["asGras080"]);
  scene.add(meshes["asGras090"]);
 
  scene.add(meshes["asGras001"]);
  scene.add(meshes["asGras011"]);
  scene.add(meshes["asGras021"]);
  scene.add(meshes["asGras031"]);
  scene.add(meshes["asGras041"]);
  scene.add(meshes["asGras051"]);
  scene.add(meshes["asGras061"]);
  scene.add(meshes["asGras071"]);
  scene.add(meshes["asGras081"]);
  scene.add(meshes["asGras091"]);

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

  scene.remove(spotLight);

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

  scene.remove(meshes["asphalt00"]);
  scene.remove(meshes["asphalt01"]);
  scene.remove(meshes["asphalt02"]);
  scene.remove(meshes["asphalt03"]);
  scene.remove(meshes["asphalt04"]);
  scene.remove(meshes["asphalt05"]);
  scene.remove(meshes["asphalt06"]);
  scene.remove(meshes["asphalt07"]);
  scene.remove(meshes["asphalt08"]);
  scene.remove(meshes["asphalt09"]);
  scene.remove(meshes["asphalt10"]);
  scene.remove(meshes["asphalt11"]);
  scene.remove(meshes["asphalt12"]);
  scene.remove(meshes["asphalt13"]);
  scene.remove(meshes["asphalt14"]);
  scene.remove(meshes["asphalt15"]);
  scene.remove(meshes["asphalt16"]);
  scene.remove(meshes["asphalt17"]);
  scene.remove(meshes["asphalt18"]);
  scene.remove(meshes["asphalt19"]);
  scene.remove(meshes["asphalt20"]);
  scene.remove(meshes["asphalt21"]);
  scene.remove(meshes["asphalt22"]);
  scene.remove(meshes["asphalt23"]);
  scene.remove(meshes["asphalt24"]);

  scene.remove(meshes["asphalt000"]);
  scene.remove(meshes["asphalt010"]);
  scene.remove(meshes["asphalt020"]);
  scene.remove(meshes["asphalt030"]);
  scene.remove(meshes["asphalt040"]);
  scene.remove(meshes["asphalt050"]);
  scene.remove(meshes["asphalt060"]);
  scene.remove(meshes["asphalt070"]);
  scene.remove(meshes["asphalt080"]);
  scene.remove(meshes["asphalt090"]);
  scene.remove(meshes["asphalt100"]);
  scene.remove(meshes["asphalt110"]);
  scene.remove(meshes["asphalt120"]);
  scene.remove(meshes["asphalt130"]);
  scene.remove(meshes["asphalt140"]);
  scene.remove(meshes["asphalt150"]);
  scene.remove(meshes["asphalt160"]);
  scene.remove(meshes["asphalt170"]);
  scene.remove(meshes["asphalt180"]);
  scene.remove(meshes["asphalt190"]);
  scene.remove(meshes["asphalt200"]);
  scene.remove(meshes["asphalt210"]);
  scene.remove(meshes["asphalt220"]);
  scene.remove(meshes["asphalt230"]);
  scene.remove(meshes["asphalt240"]);

    
  scene.remove(meshes["asphalt0202"]);
  // scene.remvoe(meshes["asphalt0212"]);

  scene.remove(meshes["asphalt001"]);
  scene.remove(meshes["asphalt011"]);
  scene.remove(meshes["asphalt021"]);
  scene.remove(meshes["asphalt031"]);
  scene.remove(meshes["asphalt041"]);
  scene.remove(meshes["asphalt051"]);
  scene.remove(meshes["asphalt061"]);
  scene.remove(meshes["asphalt071"]);
  scene.remove(meshes["asphalt081"]);
  scene.remove(meshes["asphalt091"]);
  scene.remove(meshes["asphalt101"]);
  scene.remove(meshes["asphalt111"]);
  scene.remove(meshes["asphalt121"]);
  scene.remove(meshes["asphalt131"]);
  scene.remove(meshes["asphalt141"]);
  scene.remove(meshes["asphalt151"]);
  scene.remove(meshes["asphalt161"]);
  scene.remove(meshes["asphalt171"]);
  scene.remove(meshes["asphalt181"]);
  scene.remove(meshes["asphalt191"]);
  scene.remove(meshes["asphalt201"]);
  scene.remove(meshes["asphalt211"]);
  scene.remove(meshes["asphalt221"]);
  scene.remove(meshes["asphalt231"]);
  scene.remove(meshes["asphalt241"]);

  scene.remove(meshes["asGras00"]);
  scene.remove(meshes["asGras01"]);
  scene.remove(meshes["asGras02"]);
  scene.remove(meshes["asGras03"]);
  scene.remove(meshes["asGras04"]);
  scene.remove(meshes["asGras05"]);
  scene.remove(meshes["asGras06"]);
  scene.remove(meshes["asGras07"]);
  scene.remove(meshes["asGras08"]);
  scene.remove(meshes["asGras09"]);

  scene.remove(meshes["asGras000"]);
  scene.remove(meshes["asGras010"]);
  scene.remove(meshes["asGras020"]);
  scene.remove(meshes["asGras030"]);
  scene.remove(meshes["asGras040"]);
  scene.remove(meshes["asGras050"]);
  scene.remove(meshes["asGras060"]);
  scene.remove(meshes["asGras070"]);
  scene.remove(meshes["asGras080"]);
  scene.remove(meshes["asGras090"]);

  scene.remove(meshes["asGras001"]);
  scene.remove(meshes["asGras011"]);
  scene.remove(meshes["asGras021"]);
  scene.remove(meshes["asGras031"]);
  scene.remove(meshes["asGras041"]);
  scene.remove(meshes["asGras051"]);
  scene.remove(meshes["asGras061"]);
  scene.remove(meshes["asGras071"]);
  scene.remove(meshes["asGras081"]);
  scene.remove(meshes["asGras091"]);

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
  scene.remove(meshes["gras07"]);
  scene.remove(meshes["gras08"]);
  scene.remove(meshes["gras09"]);
  scene.remove(meshes["gras10"]);
  scene.remove(meshes["gras11"]);
  scene.remove(meshes["gras12"]);
  scene.remove(meshes["gras13"]);
  scene.remove(meshes["gras14"]);
  scene.remove(meshes["gras15"]);
  scene.remove(meshes["gras16"]);
  scene.remove(meshes["gras17"]);
  scene.remove(meshes["gras18"]);
  scene.remove(meshes["gras19"]);
  scene.remove(meshes["gras20"]);
  scene.remove(meshes["gras21"]);
  scene.remove(meshes["gras22"]);
  scene.remove(meshes["gras23"]);
  scene.remove(meshes["gras24"]);
  scene.remove(meshes["gras25"]);
  scene.remove(meshes["gras26"]);
  scene.remove(meshes["gras27"]);
  scene.remove(meshes["gras28"]);
  scene.remove(meshes["gras29"]);
  scene.remove(meshes["gras30"]);
  scene.remove(meshes["gras31"]);
  scene.remove(meshes["gras32"]);
  scene.remove(meshes["gras33"]);
  scene.remove(meshes["gras34"]);
  scene.remove(meshes["gras35"]);
  scene.remove(meshes["gras36"]);

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

  scene.remove(meshes["tschool"]);
  scene.remove(meshes["afk"]);
  scene.remove(meshes["hfu"]);

  var spotLight = new THREE.SpotLight(0xffffff);
  spotLight.position.set(3, 14, 12);
  // spotLight.intensity = 5;
  spotLight.castShadow = true;
  // spotLight.shadow.radius = 4;

  spotLight.shadowMapWidth = 2048;
  spotLight.shadowMapHeight = 2048;
  spotLight.shadowCameraNear = 1;
  spotLight.shadowCameraFar = 4000;
  spotLight.shadowCameraFov = 45;
  scene.add(spotLight);

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

export {
  objectLoad,
  loadCV,
  loadHobbys,
  onResourcesLoad,
  RESOURCES_LOADED,
  objectByName,
  meshes
};
