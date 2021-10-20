var mapList = document.getElementById("mapList"); // Déclaration de la variable mapList qui va être lié à l'id mapList dans le HTML
var listmap = ["Choose a map", "namek", "glaciale", "jungle", "nocturne"]; // Création d'un tableau contenant une liste
var ctxtpred = document.getElementById("ctxtpred"); // Déclaration de la variable ctxtpred qui va être lié à l'id ctxtpred dans le HTML

var cNamek = " Contexte de Namek"; // Déclaration de la variable cNamek qui contient du texte
var cGlaciale = " Contexte de Glaciale"; // Déclaration de la variable cGlaciale qui contient du texte
var cJungle = " Contexte de Jungle"; // Déclaration de la variable cJungle qui contient du texte
var cNocturne = " Contexte de Noturne"; // Déclaration de la variable cNocturne qui contient du texte

var selectList = document.createElement("select"); // Création de l'element select
selectList.setAttribute("name", "maps"); // dans l'element select contient un name="maps"
selectList.setAttribute("id", "map-select"); // dans l'element select contient un id="map-select" 
selectList.setAttribute("onchange", "chooseArena();"); //dans l'element select contient onchange="chooseArena();"
mapList.appendChild(selectList); // affichage de la selection

for (var i = 0; i < listmap.length; i++) { // condition, on se refere au tableau listmap pour l'affichage des options, on a i=0, i doit être inférieur à 5 ("choose a map", "namek" etc), et on incremente jusqu'à avoir 5
    var option = document.createElement("option"); //création de de l'element select
    option.setAttribute("value", listmap[i]); //Toute les options voir avoir leur propres value, "choose a map", "namek" "glaciale" etc...
    option.text = listmap[i];
    selectList.appendChild(option); // on va afficher toutes les options
}





  
function chooseArena() { // la fonction chooseArena lié au select du html permet l'ensemble des interactions liés à l'arène,elle est composé de variables.
    var arena = document.getElementById("map-select"); // Déclaration de la variable arena qui va être lié à l'id map-select dans le HTML
    var choix = arena.value; // Déclaration de la choix qui va prendre la valeur de arena.value 

    var div = document.getElementById("imgarene") // Déclaration de la variable div qui va être lié à l'id imgarene dans le HTML

    switch (choix) { // A l'aide de switch (choix) nous allons associer des valeurs a arena (voir variable choix)
        case "namek": // La case "Namek" que l'on retrouve dans le html dans les cases option est associé à l'url d'une image afin que celle ci soit chargée dans la div qui a pour id imgarena
            div.style.backgroundImage = "url('img-arene/namek.png')";
            alert("Contexte Namek : " + cNamek);// msg d'alerte avec le contexte prédéfinie de Namek
            btnedit.style.display = "none";// faire disparaitre le boutton contexte rédigé
            document.getElementById("ctxtpred").innerHTML = "<b>Contexte Namek : </b>" + cNamek; // Affichage dans le html le contexte prédéfinie de Namek
            return choix;
            break;
        case "glaciale":
            div.style.backgroundImage = "url('img-arene/ice_map.PNG')";
            alert("Contexte Glaciale : " + cGlaciale);// msg d'alerte avec le contexte prédéfinie de Glaciale
            btnedit.style.display = "none"; // faire disparaitre le boutton contexte rédigé
            document.getElementById("ctxtpred").innerHTML = "<b>Contexte Glaciale : </b>" + cGlaciale; // Affichage dans le html le contexte prédéfinie de Glaciale
            return choix;
            break;

        case "jungle":
            div.style.backgroundImage = "url('img-arene/map_jungle.PNG')";
            alert("Contexte Jungle : " + cJungle);// msg d'alerte avec le contexte prédéfinie de Jungle
            btnedit.style.display = "none";// faire disparaitre le boutton contexte rédigé
            document.getElementById("ctxtpred").innerHTML = "<b>Contexte Jungle : </b>" + cJungle; // Affichage dans le html le contexte prédéfinie de Jungle
            return choix;
            break;

        case "nocturne":
            div.style.backgroundImage = "url('img-arene/nuit.png')";
            alert("Contexte Jungle : " + cNocturne);// msg d'alerte avec le contexte prédéfinie de Nocturne
            btnedit.style.display = "none";// faire disparaitre le boutton contexte rédigé
            document.getElementById("ctxtpred").innerHTML = "<b>Contexte Nocturne : </b>" + cNocturne; // Affichage dans le html le contexte prédéfinie de Nocturne
            return choix;
            break;

        default:
            console.log("nothing");


    }

}

// Code pour rédiger le contexte //

function ecritContext() { // la fonction chooseArena lié au select du html permet l'ensemble des interactions liés à l'arène,elle est composé de variables.
    btnedit.style.display = "none";// faire disparaitre le bouton "rédiger un contexte"


    //Création champ de texte pour rédiger un contexte
    var inputed = document.createElement("INPUT");// Creation d'un element input
    inputed.setAttribute("type", "text"); // type="texte"
    inputed.setAttribute("id", "myContexte");// "id=myContexte"
    inputed.setAttribute("placeholder", "Ecrit ton contexte ici !"); // placeholder="Ecrit ton texte ici" ecrit en transparence 
    document.body.appendChild(inputed); // affichage de l'input dans le html
    //button d'envoi
    var button = document.createElement("BUTTON");// creation du bouton
    button.setAttribute("type", "button");// type ="button"
    button.setAttribute("id", "btnCxt"); // id="btnCxt"
    button.innerHTML = "Envoyer"; // Le mot "Envoyer" écrit sur le bouton 
    button.onclick = function (e) { getInputValue(); };// des que l'on appuie sur ce bouton on fait appelle à la fonction getInputValue qui va permetre d'affiche le contexte rédigé dans le input
    document.body.appendChild(button); // Affichage du bouton dans le html



    
    function getInputValue() { // fonction qui va permettre de récuperer les données 
        // selection de la valeur du champ texte
        let inputVal = inputed.value;
        // Affichage de la valeur 
        let newContexte = new Contexte(inputVal);
        alert("Contexte : " + newContexte.texte); // msg d'alerte avec le contexte rédigé
        var p = document.createElement("p"); // création d'un element paragraphe qui va être la valeur p
        document.body.appendChild(p); //affichage du praragraphe dans l'html
        p.innerHTML = "<b>Le contexte :</b> " + newContexte.texte; //affichage du contexte rédigé

        myContexte.style.display = "none"; // faitre dispaitre le champ de texte
        btnCxt.style.display = "none"; // faire dispaitre le bouton Envoyer


    }

    class Contexte { // création d'une classe Contexte
        constructor(texte) { // son constructeur avec un argument texte
            this.texte = texte;
        }
    }

}















