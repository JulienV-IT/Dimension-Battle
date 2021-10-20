import {List} from  "./assets/js/list.js";
export { Player };




 class Player {
  constructor(name, weight, annee, equipement, shard, pv, talisman) {
    this.name = name;
    this.weight = weight;
    this.annee = annee;
    this.equipement = equipement;
    this.shard = shard;
    this.pv = pv;
    this.talisman = talisman;
  }

  anneeFormat() {
    let date = new Date();
    return date.getFullYear() - this.annee;
  }


  attaque(x){
    return x + this.weight + 15;
  }

}
