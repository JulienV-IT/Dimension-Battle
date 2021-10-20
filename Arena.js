/* JM */

class Avatar{
    constructor(name, weapon = "Main nues", description = "No description available", 
                pv = 200)
    {
        this.name = name;
        this.weapon = weapon;
        this.description = description;
        this.pv = pv;
    }
    attaqueDefaut(target){
        if (target.hasOwnProperty('pv'))
            target.pv -= 20;
    }
    attaqueCombine(target){
        if (target.hasOwnProperty('pv'))
            target.pv -= 35;
    }
    destroy(target){
        if (target.hasOwnProperty('pv'))
            target.pv = 0;
    }
}

/* Ajout d'evenements au bloc */
function    addEvent(src, target, event){
    return ;
}

/* créer un élément enfant à .. avec la valeur .. */
function    createElemTo(htmlTagSrc, HtmlTagDst, innerText){
    var elem = document.getElementById(htmlTagSrc);
    if (!elem){
        elem = document.getElementsByClassName(htmlTagSrc);
        if (!elem)
            return;
    }
    console.log(elem);    
    for (var i = 0; i < elem.length; i++){
        var node = document.createElement(HtmlTagDst);

        node.innerText = innerText;
        node.innerHTML = innerText;
        node.value = innerText;
        elem[i].append(node);
    }
}

/* inscrire du texte dans la balise .. */
function    setTextToHtmlTagIdOrClassName(htmlTag, input){
    var elem = document.getElementById(htmlTag);
    if (!elem){
        elem = document.getElementsByClassName(htmlTag);
        if (!elem)
            return ;
    }

    elem.innerHTML = input;
    //myDescription.innerText = input; Interpretre mal les balises html
    elem.value = input;
}

/* Ajout d'un perso dans le select avec option */
function    addPersoToSelect(perso){
    if (perso.hasOwnProperty('name'))
        createElemTo('make-perso-select', 'option', perso.name);
}

/* parmis tous les persos contenu dans arrayPerso, on les
    chargent tous dans la select avec addPersoToSelect
*/
function    loadPerso(arrayPerso){
    if (arrayPerso.length <= 0)
        return;
    arrayPerso.forEach(function(perso) {
        console.log("perso load: ");
        console.log(perso);
        addPersoToSelect(perso);
    })

}

/* on récupère le perso actuel grâce à son nom et la valeur
    inscrite dans la select
*/
function    getActualPerso(value, allPersos){
    var actualPerso;
    allPersos.forEach(function(perso){
        if (value === perso.name)
            actualPerso = perso;
    });
    return actualPerso;
}

/* On met à jour la description des persos 
    - Grâce Object.getOwnPropertyNames on récupère les noms des propriétées et
        permet aussi d'être énumérable
*/
function    setDescription(perso){
    var properties = Object.getOwnPropertyNames(perso);

    var methods = Object.getOwnPropertyNames(Object.getPrototypeOf(perso));
    
    console.log(methods);
    var description = "";
    for (var i = 0; i < properties.length; i++)
        description += "<span style=\"color:rgb(254, 125, 0); font-weight:bold; \">" + properties[i].charAt(0).toUpperCase() + 
            properties[i].slice(1) + "</span>: " + perso[properties[i]] + "<br>";

    description += "<br>Les attaques du combattant sont:<br>";
    for (var i = 1; i < methods.length; i++)
        description += "- <span style=\"color:rgb(171, 0, 0); font-weight:bold; \">" + 
        methods[i] + "</span><br>";
    setTextToHtmlTagIdOrClassName('description_perso', description);
}


/* fonction supplémentaire car le regex cest pas mon truc xd */
function    parseEntries(entries){
    var newEntries = [];
    var toRemove = ['', ': ', ':', ' '];

    console.log(entries);
    entries.forEach(function(i){
        if (i !== '' && i !== ': ' && i != ':' && i != ' '){
            console.log(i);
            newEntries.push(i); 
        }
        i++;
    });
    console.log(newEntries);
    return (newEntries);
}

/* on update le nom dans la select pour ne pas avoir de conflit
    plus tard avec avec le code js, qui, génerera rien si ce nom
        ne correspond à aucun dans parmi tous les perso
*/
function    updateSelectbox(oldName, newName){
    var mySelect = document.getElementsByClassName('make-perso-select');
    if (!mySelect)
        return;

    var myOptions = [];
    for (var i = 0; i < mySelect.length; i++)
        myOptions.push(mySelect[i]);

    if (!myOptions)
        return;

    for (var i = 0; i < myOptions.length; i++){
        for (var j = 0; j < myOptions[i].length; j++){
            if (myOptions[i][j].innerHTML === oldName)
            {
                myOptions[i][j].innerText = newName;
                myOptions[i][j].innerHTML = newName;
                myOptions[i][j].value = newName;
            }
        }
    }
}

/* fonction permettant de changer les attributs des class selon
    l'utilisateur et avec la valeur fournit(obligatoire)
*/
function    changeAttribut(perso){
    if (!perso)
        return;

    var params = document.getElementById('input_attribut')
    if (!params)
        return;
    
    /* regex qui prendra pour séparateur ici
        - le simple quote
        - la virgule
        Mais comme je connais pas trop le regex j'ai
            ajouté une fonction qui va supprimer
                les string vides ou inutiles
    */
    var entrie_user = params.value.split(/['|]/);
    var entries = parseEntries(entrie_user);
    console.log(entries);
    if (entries.length % 2 !== 0)
        return ;

    for (var i = 0; i < entries.length; i += 2){
        if (perso.hasOwnProperty(entries[i])){
            if (entries[i] === 'name' || entries[i] === 'nom'){
                updateSelectbox(perso.name, entries[i + 1]);
            }
            perso[entries[i]] = entries[i + 1];
        }
    }
    return perso;
}

/* Création de deux avatar qui servent d'exemple */
var avatar = new Avatar("Goku", "Kamehameha");
avatar.description = "Once upon a time";
var avatar2 = new Avatar("Végéta", "Final flash", "Le princes des saiyens", 180);

/* ajouter toutes les classes avant onload
    et y placer le nom de sa classe dans les params de allPersos définit
        dans ci dessous
*/

/* ON LOAD */
window.onload = function(){
    // on stock ici tous les perso dans allPersos
    var allPersos = [avatar, avatar2]; // <-
    loadPerso(allPersos);

    var mySelect = document.getElementsByClassName('make-perso-select')[0];
    if (!mySelect)
        return;

    /* mettre à jour la description du perso selectionné grâce
        à l'évenement onchange
    */
    mySelect.onchange = function() {
        console.log(mySelect.value);
        if (mySelect.value === "Choisir un perso"){
            setTextToHtmlTagIdOrClassName("description_perso", "No description available");
            return ;
        }
        var actualPerso = getActualPerso(mySelect.value, allPersos);
        console.log(actualPerso);
        if (actualPerso)
            setDescription(actualPerso);
    }

    var mybutton = document.getElementById('btnChangeAttr');
    if (!mybutton)
        return;

    /* Modifier et actualiser les infos de la description*/
    mybutton.onclick = function(){
        console.log(mySelect.value);

        var actualPerso = getActualPerso(mySelect.value, allPersos);
        if (actualPerso){
            changeAttribut(actualPerso);
            setDescription(actualPerso);
        }
    };
};

/* END J-M */

/* Pierre & Michel */
function chooseArena(){
    var arena = document.getElementById("map-select");
    if (!arena)
        return;

    var choix = arena.value;
    var div = document.getElementById("img_arene")    
    if (!div)
        return;

    switch (choix) {
        case "Namek":
        case "Nocturne":
        case "Jungle":
        case "Ice_map":
            div.style.background = "url('./img-arene/" + choix + ".png')";
            break;
        default:
            console.log("nothing");
    }
    div.style.backgroundSize = "100%";
}












    


// if arena.value = choix