import jQuery from "jquery";
window.$ = jQuery;
window.jQuery = jQuery;

import{clickUiInformation} from "./clickCard";
import {renderInit} from "./renderInit";
import { loadCV } from "./objectLoad";

let nav = false;

let cv = false;

$(document).ready(function () {

    var getHeight = $('.card-wrapper').height();
    var getWidth = $('.card-wrapper').width();
    $('.card-boxshadow').css({
        height: getHeight,
        width: getWidth
    });
    console.log(getWidth);

    console.info('DOM Ready');
    // $(function () { 
 
    //     showText(".card-text", 1, 0, 0, 100);    
    // }); 
    renderInit();
    $('.menu-wrapper').on('click', function(){
        showMenu(this);
    })
});

function showMenu(x) {
    x.classList.toggle("change");
}

$('.menu-wrapper').on('click', function(){
    $('.menu-overlay').fadeToggle();
})

$('#cv').on('click', function(){
    $('.menu-nav').removeClass('menu-nav--active');
    $('#cv').addClass('menu-nav--active');
    closeNavigation();
    loadCV();
    cv = true;
})

$('#portfolio').on('click', function(){
    $('.menu-nav').removeClass('menu-nav--active');
    $('#portfolio').addClass('menu-nav--active');
    closeNavigation();
})

$('#hobby').on('click', function(){
    $('.menu-nav').removeClass('menu-nav--active');
    $('#hobby').addClass('menu-nav--active');
    closeNavigation();
})

function closeNavigation(){
    setTimeout(function(){$('.menu-overlay').fadeToggle();}, 100);
    setTimeout(function(){$('.change').removeClass("change");}, 100);
    $('.card-text').empty();
    $('.card-wrapper, .card').hide();
}

clickUiInformation();

export {
    nav,
    cv
}