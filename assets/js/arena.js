
// la fonction chooseArena lié au select du html permet l'ensemble des interactions liés à l'arène,elle est composé de variables.

function chooseArena(){

// la variable arena est lié à l'id "map-select"

    var arena = document.getElementById("map-select");

// la variable choix reprend arena en lui rajoutant une valeur qui reste à définit

    var choix = arena.value;




// la variable div est retrouvée dans le html avec l'id "imgarene" avec le getelementbyId

var div = document.getElementById("imgarene")

// A l'aide de switch (choix) nous allons associer des valeurs a arena (voir variable choix)

switch (choix) {

    // La case "Namek" que l'on retrouve dans le html dans les cases option est associé à l'url d'une image afin que celle ci soit chargée dans la div qui a pour id imgarena

    case "namek":
        div.style.backgroundImage = "url('./assets/img/img-arene/namek.png')";
        break;
    case "glaciale":
        div.style.backgroundImage = "url('./assets/img/img-arene/ice_map.PNG')";
        break;

    case "jungle":
        div.style.backgroundImage = "url('./assets/img/img-arene/map_jungle.PNG')";
        break;

    case "nocturne":
        div.style.backgroundImage = "url('./assets/img/img-arene/nuit.png')";
        break;

    default:
        console.log("nothing");


    }

}


















// if arena.value = choix
