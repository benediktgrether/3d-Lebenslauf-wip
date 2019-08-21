import { meshes } from "./objectLoad";

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
      });
}

export {lunarLandingAnimation, tweenUpdate};