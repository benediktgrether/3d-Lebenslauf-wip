import jQuery from "jquery";
window.$ = jQuery;
window.jQuery = jQuery;
import { clickCardArrow, clickCardClose } from "./clickCard";

let text = {
  1: {
    0: ">>Houston, Tranquility Base here. The Eagle has landed<<",
    1: "Schön, dass du auf meiner Portfolio Webseite gelandet bist",
    2: "Drücke auf das Burgermenü um die Webseite zu entdecken",
    animation: {
      camera: "new position",
      object: "test",
      text: 0
    }
  },
  2: {
    0: "Hallo! Ich bin das Hologramm von Benedikt Grether",
    1: "Geboren bin ich am 13.03.1990 in Lörrach.",
    2: "Ich werde dich nun durch meinen Lebenslauf begleiten.",

    animation: {
      cameraX: 40,
      cameraZ: 0,
      object: "test",
      text: 0
    }
  },
  3: {
    0: "Zu meiner Schulbildung:",
    1: "Im Schuljahr 06/07 habe ich meinen Werkrealschulabschluss",
    2: "an der Freien Evangelischen Schule in Lörrach gemacht.",
    3: "Im Schuljahr 07/08 besuchte ich das",
    4: "Informationstechnische Gymnasium in Lörrach.",

    animation: {
      cameraX: 40,
      cameraZ: 10,
      object: "test",
      text: 0
    }
  },
  4: {
    0: "Von 2008 - 2011 absolvierte ich eine Ausbildung zum",
    1: "Eisenbahner im Betriebsdienst Fachrichtung Lokführer & Transport",
    animation: {
      cameraX: 40,
      cameraZ: 20,
      object: "test",
      text: 0
    }
  },
  5: {
    0: "In 11/12 arbeitete ich als Auslandslokführer",
    1: "für die Deutsche Bahn AG",
    animation: {
      cameraX: 40,
      cameraZ: 30,
      object: "test",
      text: 0
    }
  },
  6: {
    0: "In 12/13 besuchte ich das Berufskolleg",
    1: "in Weil am Rhein mit der Fachrichtung",
    2: "Technische Physik",
    animation: {
      cameraX: 40,
      cameraZ: 40,
      object: "test",
      text: 0
    }
  },
  7: {
    0: "Von 2013 - 2016 absolvierte ich die Ausbildung",
    1: "zum staatlich anerkannten Grafik Designer",
    2: "auf der Akademie für Kommunikation",
    3: "in Freiburg",
    animation: {
      cameraX: 40,
      cameraZ: 50,
      object: "test",
      text: 0
    }
  },
  8: {
    0: "Seit 2016 besuche ich die Hochschule Furtwangen",
    1: "Studiengang Medieninformatik B. Sc",
    2: "Im Wintersemester 17/18 absolvierte ich ein Praxissemester",
    3: "bei der Land in Sicht AG in Sulzburg",
    animation: {
      cameraX: 40,
      cameraZ: 60,
      object: "test",
      text: 0
    }
  }
};
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
};

const getText = (target, message, index, interval) => {
  if (message != undefined) {
    if (index < message.length) {
      $(target).append(message[index++]);
      setTimeout(function() {
        getText(target, message, index, interval);
      }, interval);
    } else if (checkNextMessage != undefined) {
      setTimeout(function() {
        $(".card-arrow").show();
      }, 500);
      // setTimeout(function () { $('.card-arrow').show() }, 500);
      // $('.card-arrow').addClass('card-arrow--bounce');
    } else {
      setTimeout(function() {
        $(".card-close").show();
      }, 500);
    }
  }
};

$(".card-arrow").on("click", function() {
  clickCardArrow(i, j);
});

$(".card-close").on("click", function() {
  clickCardClose();
});

export { showText, text };
