const JurassicPark = function(){
  this.herd = [];
}

JurassicPark.prototype.addDinosaur = function(dinosaur){
  this.herd.push(dinosaur);
}

JurassicPark.prototype.findDinosaurByType = function(type){
  let sum = 0;
  for (dinosaur of this.herd){
    if (dinosaur.type == type) {
      sum = (sum + 1);
      }
    }
    return sum;
}

JurassicPark.prototype.removeDinosaurByType = function(type){
 let totalRemoved = [];
 for (dinosaur of this.herd){
   if (dinosaur.type == type) {
      totalRemoved.push(dinosaur);
  }
}
  return totalRemoved.length;
}


JurassicPark.prototype.offspringMoreThan2 = function(){
  let moreThanTwo = [];
  for (dinosaur of this.herd){
    if(dinosaur.offspringPerYear > 2){
      moreThanTwo.push(dinosaur)
      }
  }
  return moreThanTwo.length;
}


module.exports = JurassicPark;
