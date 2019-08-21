import jQuery from "jquery";
window.$ = jQuery;
window.jQuery = jQuery;
import{ clickCardArrow, clickCardClose} from "./clickCard";

let text = {
    1: {
        0: ">>Houston, Tranquility Base here. The Eagle has landed<<",
        1: "Schön dass du auf meiner Portfolio Webseite gelandet bist",
        2: "Drücke auf das Burgermenü um die Webseite zu entdecken",
        animation: {
            camera: "new position",
            object: "test",
            text: 0
        }
    },
    2: {
        0: "Enemenemuh du bist ne kuh",
        animation: {
            cameraX: 40,
            cameraZ: 10, 
            object: "test",
            text: 0
        }
    },
    3: {
        0: "Die Paula ist ne Kuh",
        animation: {
            cameraX: 40,
            cameraZ: 20, 
            object: "test",
            text: 0
        }
    }
}
let message;
let checkNextMessage;
let i;
let j;


const showText = (target, getI, getJ, index, interval) => {

    // To Do
    // Show Text needed a if question to check if text != null
    i = getI;
    j = getJ;
    console.log(i, j);
    message = text[i][j];
    checkNextMessage = text[i][j + 1];
    getText(target, message, index, interval);
}


const getText = (target, message, index, interval) => {
    if (message != undefined) {
        if (index < message.length) {
            $(target).append(message[index++]);
            setTimeout(function () { getText(target, message, index, interval); }, interval)
        } else if (checkNextMessage != undefined) {
            setTimeout(function () { $('.card-arrow').show() }, 500);
            $('.card-arrow').addClass('card-arrow--bounce');
        } else {
            setTimeout(function(){ 
                $('.card-close').show()
            }, 500);
        }
    }
}

$('.card-arrow').on('click', function(){
    clickCardArrow(i, j);
})

$('.card-close').on('click',function(){
    clickCardClose();
})

export {
    showText,
    text
}