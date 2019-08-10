import jQuery from "jquery";
window.$ = jQuery;
window.jQuery = jQuery;

import showText from "./showText";

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
}
export {
    clickCardArrow,
    clickCardClose
};
