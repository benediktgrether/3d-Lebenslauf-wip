// var renderSmoke = true;
import {smoke, showInformation, objectByName} from "./renderInit";
import {moveToNewLocation, moveToLocation} from "./moveToNewLocation";
import jQuery from "jquery";
window.$ = jQuery;
window.jQuery = jQuery;
var showModel = true;
var charVisibility = false;

function startingSmokeAnimation(objectByName, renderSmoke) {
    // if (renderSmoke == true) {
        // showModel = getShowModel;
        if (smoke[0].scale.x > 0) {
            if (smoke[0].position.y > 0.4 && charVisibility == false && showModel == true) {
                objectByName.visible = true;
                charVisibility = true;
                setTimeout(function(){showInformation()}, 5000);
            }
            else if(smoke[0].position.y > 0.4 && charVisibility == true && showModel == false){
                objectByName.visible = false;
                charVisibility = false;
                setTimeout(function(){moveToNewLocation(true)}, 5000);  
                // setTimeout(function(){moveToLocation = true}, 5000); 
                console.log(moveToLocation); 
            }
            smoke[0].position.y += Math.sin(1) * 0.015;
            smoke[0].scale.x -= (Math.sin(1) * 0.001, Math.sin(1) * 0.001, Math.sin(1) * 0.001);
            smoke[0].scale.y -= (Math.sin(1) * 0.001, Math.sin(1) * 0.001, Math.sin(1) * 0.001);
            smoke[0].scale.z -= (Math.sin(1) * 0.001, Math.sin(1) * 0.001, Math.sin(1) * 0.001);
        }else{
            // showInformation();
            renderSmoke = false;
            return renderSmoke;
        }
        if (smoke[1].scale.x > 0) {
            smoke[1].position.y += Math.sin(1) * 0.016;
            smoke[1].scale.x -= (Math.sin(1) * 0.001, Math.sin(1) * 0.001, Math.sin(1) * 0.001);
            smoke[1].scale.y -= (Math.sin(1) * 0.001, Math.sin(1) * 0.001, Math.sin(1) * 0.001);
            smoke[1].scale.z -= (Math.sin(1) * 0.001, Math.sin(1) * 0.001, Math.sin(1) * 0.001);
        }
        if (smoke[2].scale.x > 0) {
            smoke[2].position.y += Math.sin(1) * 0.017;
            smoke[2].scale.x -= (Math.sin(1) * 0.001, Math.sin(1) * 0.001, Math.sin(1) * 0.001);
            smoke[2].scale.y -= (Math.sin(1) * 0.001, Math.sin(1) * 0.001, Math.sin(1) * 0.001);
            smoke[2].scale.z -= (Math.sin(1) * 0.001, Math.sin(1) * 0.001, Math.sin(1) * 0.001);
        }
        if (smoke[3].scale.x > 0) {
            smoke[3].position.y += Math.sin(1) * 0.018;
            smoke[3].scale.x -= (Math.sin(1) * 0.001, Math.sin(1) * 0.001, Math.sin(1) * 0.001);
            smoke[3].scale.y -= (Math.sin(1) * 0.001, Math.sin(1) * 0.001, Math.sin(1) * 0.001);
            smoke[3].scale.z -= (Math.sin(1) * 0.001, Math.sin(1) * 0.001, Math.sin(1) * 0.001);
        }
        if (smoke[4].scale.x > 0) {
            smoke[4].position.y += Math.sin(1) * 0.019;
            smoke[4].scale.x -= (Math.sin(1) * 0.001, Math.sin(1) * 0.001, Math.sin(1) * 0.001);
            smoke[4].scale.y -= (Math.sin(1) * 0.001, Math.sin(1) * 0.001, Math.sin(1) * 0.001);
            smoke[4].scale.z -= (Math.sin(1) * 0.001, Math.sin(1) * 0.001, Math.sin(1) * 0.001);
        // }
    }
    
}

function newPositionSmoke(getShowModel){
    showModel = getShowModel;
    smoke[0].position.set(objectByName.position.x, -2.5 + 1.5, -0.8);
    smoke[1].position.set(objectByName.position.x, -2.5 + 1.7, -1);
    smoke[2].position.set(objectByName.position.x, -2.5 + 1.8, -0.5);    
    smoke[3].position.set(objectByName.position.x, -2.5 + 2, -0.8);
    smoke[4].position.set(objectByName.position.x - 0.1, -2.5 + 2.2, -0.9);
    
    smoke[0].scale.set(0.5, 0.5, 0.5);
    smoke[1].scale.set(0.45, 0.45, 0.45);
    smoke[2].scale.set(0.3, 0.3, 0.3);
    smoke[3].scale.set(0.25, 0.25, 0.25);
    smoke[4].scale.set(0.2, 0.2, 0.2);
    
    // positionSmoke = true;
    // renderSmoke = true;
}

export {
    startingSmokeAnimation,
    newPositionSmoke
}