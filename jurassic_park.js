const JurassicPark = function(){
  this.herd = [];
}

JurassicPark.prototype.addDinosaur = function(dinosaur){
  this.herd.push(dinosaur);
}

JurassicPark.prototype.removeDinosaur = function(dinosaur){
  const indexOfItem = this.herd.indexOf(dinosaur)
  this.herd.splice(indexOfItem, 1);
}

module.exports = JurassicPark;
