import { text } from "./showText";
import {startingSmokeAnimation, newPositionSmoke} from './smoke';
import { camera, objectByName, renderSmoke } from "./renderInit";
// import {i} from "./clickCard";

let moveToLocation = false;
var clock;
clock = new THREE.Clock();
let i;

var tween;
let tweenUpdate = false;

function initTween(getI) {
    i = getI;
    var position = { x: objectByName.position.x };
    var target = { x: text[i].animation.cameraZ };
    tween = new TWEEN.Tween(position).to(target, 5000);
    tween.onUpdate(function () {
        console.log("passiert hier was?");
        console.log(objectByName.position);
        objectByName.position.x = position.x;

        camera.position.x = 20 + objectByName.position.x;
        camera.position.z = 20 + objectByName.position.z;
        camera.updateProjectionMatrix();
    });
    tween.easing(TWEEN.Easing.Cubic.InOut)
    
    tween.onComplete(function() {
        console.log('done!');
        console.log(objectByName.position.x);
        tweenUpdate = false;
        i ++;
        setTimeout(function(){newPositionSmoke(true)}, 500);
      });
}


function moveToNewLocation(getMoveToLocationStatus) {
    moveToLocation = getMoveToLocationStatus;
    console.log(objectByName.position.x)
    tween.start();
    tweenUpdate = true;
    moveToLocation = false;
}

export {
    moveToNewLocation,
    moveToLocation,
    initTween,
    tweenUpdate
}