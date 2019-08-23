import jQuery from "jquery";
window.$ = jQuery;
window.jQuery = jQuery;

import {showText, text} from "./showText";
import {newPositionSmoke} from "./renderInit";
import {initTween} from "./tweenObject";
import {hideHoloForMovement} from "./holoFrame";

let i = 2;
let j = 0;


const clickCardArrow = (getI, getJ) =>{
    i = getI;
    j = getJ + 1;
    $('.card-text').empty();
    $('.card-arrow').hide();
    $('.card-arrow').removeClass('card-arrow--bounce');
    showText(".card-text", i, j, 0, 80); 
}

const clickCardClose = () =>{
    $('.card-text').empty();
    $('.card-close').hide(); 
    $('.card-wrapper, .card').hide();
    if(text[i + 1 ] != undefined){
        i = i + 1;
        j = 0;
        initTween(i);
        // hideHoloForMovement();
        setTimeout(function(){ hideHoloForMovement() }, 500);
    }
}

const clickUiInformation = () => {
    $('.ui-information-wrapper').on('click', function(){
        console.log("Bist du hier drin?");
        $('.card-text').empty();
        $('.card-arrow').hide();
        $('.card-close').hide(); 
        console.log(i);
        j = 0;
        $('.ui-information-wrapper').removeClass('ui-information--bounce');
        $('.ui-information-wrapper').hide();
        setTimeout(function () { $('.card-wrapper, .card').show() }, 200);
        setTimeout(function () {showText(".card-text", i, j, 0, 80)}, 700);    
    })
}

export {
    clickCardArrow,
    clickCardClose,
    clickUiInformation,
    i
};
