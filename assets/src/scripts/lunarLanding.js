import { meshes } from "./objectLoad";
import { showText } from "./showText";

var tween;
let tweenUpdate = true;

function lunarLandingAnimation(){
    console.log(meshes["lunar"].position);
    var position = { y: meshes["lunar"].position.y };
    var target = { y: 0.94 };
    console.log(position, target);
    tween = new TWEEN.Tween(position).to(target, 10000);
    tween.onUpdate(function () {
        console.log("passiert hier was?");
        console.log(meshes["lunar"].position);
        meshes["lunar"].position.y = position.y;
    });
    tween.easing(TWEEN.Easing.Cubic.Out)
    tween.start();
    tween.onComplete(function() {
        console.log('done!');
        tweenUpdate = false;
        setTimeout(function () { $('.card-wrapper, .card').show("slow") }, 1000);
        setTimeout(function () {showText(".card-text", 1, 0, 0, 100)}, 2000);
      });
}

export {lunarLandingAnimation, tweenUpdate};