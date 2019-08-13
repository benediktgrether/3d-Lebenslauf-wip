import jQuery from "jquery";
window.$ = jQuery;
window.jQuery = jQuery;
import{ clickCardArrow, clickCardClose} from "./clickCard";

let text = {
    1: {
        scene :scene01,
        0: "Hallo wie schön das du auf meiner Webseite und Lebenslauf gelandet bist",
        1: ">>Houston, Tranquility Base here. The Eagle has landed<<",
        2: "Jetzt zu mir. Ich heiße Benedikt Grether und bin zurzeit 29 Jahre alt.",
        animation: {
            camera: "new position",
            object: "test",
            text: 0
        }
    },
    2: {
        scene: scene02,
        0: "Enemenemuh du bist ne kuh",
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

export default showText;