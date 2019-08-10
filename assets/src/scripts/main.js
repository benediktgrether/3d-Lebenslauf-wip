import jQuery from "jquery";
window.$ = jQuery;
window.jQuery = jQuery;

import showText from "./showText";
import renderInit from "./renderInit";





$(document).ready(function () {

    var getHeight = $('.card-wrapper').height();
    var getWidth = $('.card-wrapper').width();
    $('.card-boxshadow').css({
        height: getHeight,
        width: getWidth
    });
    console.log(getWidth);

    console.info('DOM Ready');
    $(function () { 
 
        showText(".card-text", 1, 0, 0, 100);    
    }); 
    renderInit();
});