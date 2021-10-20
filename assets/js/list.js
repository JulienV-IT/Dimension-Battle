export {name, age, annee,equipement,shard,pv};

// NAME
var name = document.createElement("INPUT");
  name.setAttribute("type", "text");
  name.setAttribute("value", "Le nom de leur Héro!");
  document.body.appendChild(name);

//button Name
var buttonName  = document.createElement("BUTTON");
buttonName.setAttribute("type", "button");
buttonName.setAttribute("id", "btnTest");
buttonName.innerHTML = "ClickMe";
buttonName.onclick = function(e) {getInputValue();};
document.body.appendChild(buttonName);


// age
var age = document.createElement("INPUT");
  age.setAttribute("type", "text");
  age.setAttribute("value", "L'age de leur Héro!");
  document.body.appendChild(age);

//button age
var buttonAge  = document.createElement("BUTTON");
buttonAge.setAttribute("type", "button");
buttonAge.setAttribute("id", "btnTest");
buttonAge.innerHTML = "ClickMe";
buttonAge.onclick = function(e) {getInputValue();};
document.body.appendChild(buttonAge);

var annee = document.createElement("INPUT");
  annee.setAttribute("type", "text");
  annee.setAttribute("value", "Le nom de leur Héro!");
  document.body.appendChild(annee);

//button d'envoi
var buttonAnnee  = document.createElement("BUTTON");
buttonAnnee.setAttribute("type", "button");
buttonAnnee.setAttribute("id", "btnTest");
buttonAnnee.innerHTML = "ClickMe";
buttonAnnee.onclick = function(e) {getInputValue();};
document.body.appendChild(buttonAnnee);


var equipement = document.createElement("INPUT");
  annee.setAttribute("type", "text");
  annee.setAttribute("value", "Le nom de leur Héro!");
  document.body.appendChild(annee);

//button d'envoi
var buttonEquipement  = document.createElement("BUTTON");
buttonEquipement.setAttribute("type", "button");
buttonEquipement.setAttribute("id", "btnTest");
buttonEquipement.innerHTML = "ClickMe";
buttonEquipement.onclick = function(e) {getInputValue();};
document.body.appendChild(buttonEquipement);

var equipement = document.createElement("INPUT");
  equipement.setAttribute("type", "text");
  equipement.setAttribute("value", "Le nom de leur Héro!");
  document.body.appendChild(equipement);

//button d'envoi
var buttonShard  = document.createElement("BUTTON");
buttonShard.setAttribute("type", "button");
buttonShard.setAttribute("id", "btnTest");
buttonShard.innerHTML = "ClickMe";
buttonShard.onclick = function(e) {getInputValue();};
document.body.appendChild(buttonShard);
