import { text, showText } from "./showText";
import { meshes } from "./objectLoad";
import { showHolo } from "./holoFrame";
import { camera, objectByName, renderSmoke } from "./renderInit";
import { cv, hobby } from "./main";
// import {i} from "./clickCard";

let moveToLocation = false;
var clock;
clock = new THREE.Clock();
let i;

var tween;
let tweenUpdate = true;

function initTween(getI) {
  i = getI;
  var position = { x: objectByName.position.x };
  var target = { x: text[i].animation.cameraZ };
  tween = new TWEEN.Tween(position).to(target, 5000);
  tween.onUpdate(function() {
    console.log("passiert hier was?");
    console.log(objectByName.position);
    objectByName.position.x = position.x;

    camera.position.x = 20 + objectByName.position.x;
    camera.position.z = 20 + objectByName.position.z;
    camera.updateProjectionMatrix();
  });
  tween.easing(TWEEN.Easing.Cubic.InOut);

  tween.onComplete(function() {
    console.log("done!");
    console.log(objectByName.position.x);
    meshes["charHolo"].position.x = objectByName.position.x;
    tweenUpdate = false;
    i++;
    setTimeout(function() {
      showHolo(false);
    }, 500);
  });
}

function moveToNewLocation(getMoveToLocationStatus) {
  moveToLocation = getMoveToLocationStatus;
  console.log(objectByName.position.x);
  tween.start();
  tweenUpdate = true;
  moveToLocation = false;
}

function lunarLandingAnimation() {
  console.log(meshes["lunar"].position);
  var position = { y: meshes["lunar"].position.y };
  var target = { y: 0.94 };
  console.log(position, target);
  tween = new TWEEN.Tween(position).to(target, 10000);
  tween.onUpdate(function() {
    meshes["lunar"].position.y = position.y;
  });
  tween.easing(TWEEN.Easing.Cubic.Out);
  tween.start();
  tween.onComplete(function() {
    console.log("done!");
    tweenUpdate = false;
    if (cv == false && hobby == false) {
      setTimeout(function() {
        $(".card-wrapper, .card").show("slow");
      }, 1000);
      setTimeout(function() {
        showText(".card-text", 1, 0, 0, 50);
      }, 2000);
    }
  });
}

export {
  moveToNewLocation,
  moveToLocation,
  initTween,
  tweenUpdate,
  lunarLandingAnimation
};
