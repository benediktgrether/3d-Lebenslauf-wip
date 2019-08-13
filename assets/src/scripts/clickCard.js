import jQuery from "jquery";
window.$ = jQuery;
window.jQuery = jQuery;

import showText from "./showText";
import {newPositionSmoke} from "./renderInit";

var i;
var j;


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
    setTimeout(function(){newPositionSmoke(false)}, 500);
}

const clickUiInformation = () => {
    $('.ui-information-wrapper').on('click', function(){
        console.log("Bist du hier drin?");
        $('.ui-information-wrapper').removeClass('ui-information--bounce');
        $('.ui-information-wrapper').hide();
        setTimeout(function () { $('.card-wrapper, .card').show() }, 200);
        setTimeout(function () {showText(".card-text", 1, 0, 0, 100)}, 700);    
    })
}

export {
    clickCardArrow,
    clickCardClose,
    clickUiInformation
};
