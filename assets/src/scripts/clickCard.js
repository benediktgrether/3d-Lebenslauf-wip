import jQuery from "jquery";
window.$ = jQuery;
window.jQuery = jQuery;

import {showText, text} from "./showText";
import {newPositionSmoke} from "./renderInit";
import {initTween} from "./moveToNewLocation";

let i = 1;
let j = 0;


const clickCardArrow = (getI, getJ) =>{
    i = getI;
    j = getJ + 1;
    $('.card-text').empty();
    $('.card-arrow').hide();
    $('.card-arrow').removeClass('card-arrow--bounce');
    showText(".card-text", i, j, 0, 100); 
}

const clickCardClose = () =>{
    $('.card-text').empty();
    $('.card-close').hide(); 
    $('.card-wrapper, .card').hide();
    if(text[i + 1 ] != undefined){
        i = i + 1;
        j = 0;
        initTween(i);
        setTimeout(function(){newPositionSmoke(false)}, 500);
    }
}

const clickUiInformation = () => {
    $('.ui-information-wrapper').on('click', function(){
        console.log("Bist du hier drin?");
        $('.ui-information-wrapper').removeClass('ui-information--bounce');
        $('.ui-information-wrapper').hide();
        setTimeout(function () { $('.card-wrapper, .card').show() }, 200);
        setTimeout(function () {showText(".card-text", i, j, 0, 100)}, 700);    
    })
}

export {
    clickCardArrow,
    clickCardClose,
    clickUiInformation,
    i
};
