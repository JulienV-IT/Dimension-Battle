


class Interact {
  constructor(atk,def,all,cible,user){
    this.atk =  atk();
    this.def =  def();
    this.all =  all();
    this.cible = persoFull[x].name;
    this.user = persoFull[x].name;
    alert(this.cible);
    alert(this.user);
  }

  atk(x){
    var charge = x;
    alert(charge);
  }

  def(x){
    var contre = x;
    alert(contre);
  }

  all(x){
    var heart = x;
    alert(heart);
  }
}


var ready = new Interact(atk(5));
