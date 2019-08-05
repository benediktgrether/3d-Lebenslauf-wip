let text = {
    intro : {
        0: "Hallo wie schön das du auf meiner Webseite und Lebenslauf gelandet bist",
        1: ">>Houston, Tranquility Base here. The Eagle has landed<<",
        2: "Jetzt zu mir. Ich heiße Benedikt Grether und bin zurzeit 29 Jahre alt."
    }
}

const showText = (target, message, index, interval) =>{    
    if (index < message.length){
        $(target).append(message[index++]);
        setTimeout(function(){ showText(target, message, index, interval); }, interval)
    }else{
        setTimeout(function(){$('.card-arrow').show()}, 500);
        $('.card-arrow').addClass('card-arrow--bounce');
    }
}
export default showText;


// const multiplyByTwo = (numberToMultipy) => {
//     return numberToMultipy*2;
// }
// export default multiplyByTwo;