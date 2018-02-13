const JurassicPark = function(){
  this.herd = [];
}

JurassicPark.prototype.addDinosaur = function(dinosaur){
  this.herd.push(dinosaur);
}

module.exports = JurassicPark;
