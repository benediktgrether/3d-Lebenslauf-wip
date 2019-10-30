import { smoke, showInformation, objectByName } from "./renderInit";
import { moveToNewLocation, moveToLocation } from "./tweenObject";
import { showText, text } from "./showText";
import { meshes } from "./objectLoad";

import { i } from "./clickCard";

let j = 0;

var counter = 0;
var startingHolo = false;
var charHoloVisibility = false;
var timing = 500;
var checkHideForMovement;

function showHolo(getHide) {
  checkHideForMovement = getHide;
  console.log(getHide, checkHideForMovement);
  if (checkHideForMovement == false) {
    console.log("test enenenenen");
    meshes["charHolo"].visible = true;
    counter++;
    setTimeout(function() {
      hideHolo();
    }, timing);
  } else {
    meshes["charHolo"].visible = true;
    counter++;
    setTimeout(function() {
      hideHoloForMovement();
    }, timing);
  }
}

function hideHolo() {
  if (counter <= 10) {
    console.log("test");
    meshes["charHolo"].visible = false;
    setTimeout(function() {
      showHolo(false);
    }, timing);
    timing = timing / 2;
    console.log(timing);
    if (counter == 5) {
      meshes["char"].visible = true;
    }
  } else {
    // meshes["char"].visible = true;
    // setTimeout(function(){meshes["char"].visible = true}, 500);
    // setTimeout(function() {
    //   showInformation();
    // }, 1000);

    setTimeout(function() {
      $(".card-wrapper, .card").show();
    }, 200);
    setTimeout(function() {
      showText(".card-text", i, j, 0, 50);
    }, 700);

    counter = 0;
    timing = 500;
  }
}

function hideHoloForMovement() {
  // checkHideForMovement = true;
  console.log(counter);
  if (counter <= 10) {
    console.log(counter);
    console.log("test");
    meshes["charHolo"].visible = false;
    setTimeout(function() {
      showHolo(true);
    }, timing);
    timing = timing / 2;
    console.log(timing);
    if (counter == 2) {
      meshes["char"].visible = false;
    }
  } else {
    counter = 0;
    timing = 500;
    // hideHoloForMovement = false;
    meshes["charHolo"].visible = false;
    setTimeout(function() {
      moveToNewLocation(true);
    }, 500);
  }
}
// else{
//     meshes["charHolo"].visible = false;
//     console.log("test02");
// }

function setShowHoloTimeout() {
  if (startingHolo == false) {
    setTimeout(function() {
      showHolo();
    }, 500);
    startingHolo = true;
  }
}

function showInformationForHolo() {
  $(".holoInformation").css("display", "flex");
  $(".holoInformation").on("click", function() {
    $(".holoInformation").css("display", "none");
    setTimeout(function() {
      showHolo(false);
    }, 1000);
  });
}

export {
  showHolo,
  hideHolo,
  startingHolo,
  setShowHoloTimeout,
  showInformationForHolo,
  hideHoloForMovement
};
