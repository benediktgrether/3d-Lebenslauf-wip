import { scene, smoke } from "./renderInit";
import { lunarLandingAnimation } from "./tweenObject";
import { showInformationForHolo } from "./holoFrame";

var models = {
  lunar: {
    glb: "assets/dist/object/lunar/lunar.glb",
    name: "lunar",
    mesh: null
  },
  lunarSurface: {
    glb: "assets/dist/object/lunarsurface/moonSurface.glb",
    name: "lunar_surface",
    mesh: null
  },
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
  holopod: {
    glb: "assets/dist/object/holopod/holopod.glb",
    name: "holopod",
    mesh: null
  },
  charHolo: {
    glb: "assets/dist/object/char/char_holo_03.glb",
    name: "charHolo",
    mesh: null
  },
  fes: {
    glb: "assets/dist/object/building/fes.glb",
    name: "fes",
    mesh: null
  },
  br294: {
    glb: "assets/dist/object/db/br294/br294.glb",
    name: "br294",
    mesh: null
  },
  vehicle01: {
    glb: "assets/dist/object/db/vehicle/frigth_vehicle_01.glb",
    name: "vehicle01",
    mesh: null
  },
  vehicle02: {
    glb: "assets/dist/object/db/vehicle/frigth_vehicle_02.glb",
    name: "vehicle02",
    mesh: null
  },
  vehicle03: {
    glb: "assets/dist/object/db/vehicle/frigth_vehicle_03.glb",
    name: "vehicle03",
    mesh: null
  },
  track: {
    glb: "assets/dist/object/db/track/track.glb",
    name: "track",
    mesh: null
  },
  br185: {
    glb: "assets/dist/object/db/br185/br185.glb",
    name: "br185",
    mesh: null
  },
  mountain: {
    glb: "assets/dist/object/mountain/mountain.glb",
    name: "mountain",
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

  meshes["mountain"] = models.mountain.mesh.clone();

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

  meshes["holopod00"].scale.set(0.25, 0.25, 0.25);
  meshes["holopod00"].position.set(0.8, 0.2, -0.8);

  meshes["holopod01"].scale.set(0.25, 0.25, 0.25);
  meshes["holopod02"].scale.set(0.25, 0.25, 0.25);
  meshes["holopod03"].scale.set(0.25, 0.25, 0.25);
  meshes["holopod04"].scale.set(0.25, 0.25, 0.25);
  meshes["holopod05"].scale.set(0.25, 0.25, 0.25);
  meshes["holopod06"].scale.set(0.25, 0.25, 0.25);

  meshes["holopod01"].position.set(10, 0.2, -0.8);
  meshes["holopod02"].position.set(20, 0.2, -0.8);
  meshes["holopod03"].position.set(30, 0.2, -0.8);
  meshes["holopod04"].position.set(40, 0.2, -0.8);
  meshes["holopod05"].position.set(50, 0.2, -0.8);
  meshes["holopod06"].position.set(60, 0.2, -0.8);

  meshes["mountain"].position.set(35,0.25,0);

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
  scene.add(meshes["track06"]);
  scene.add(meshes["track07"]);

  scene.add(meshes["mountain"]);

  objectByName = meshes["char"];
  objectByName.visible = false;
  meshes["charHolo"].visible = false;

  console.log(objectByName.position);
  showInformationForHolo();
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
  onResourcesLoad,
  RESOURCES_LOADED,
  objectByName,
  meshes
};
