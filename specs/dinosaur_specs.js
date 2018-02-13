const assert = require ("assert")
const Dinosaur = require ("../dinosaur.js")

describe("Dinosaur", function(){

  let dinosaur1;

  beforeEach(function(){
    dinosaur1 = new Dinosaur("Tyrannosaurus", 2);
  });

  it("should have a type", function(){
    assert.strictEqual(dinosaur1.type, "Tyrannosaurus")
  });

  it("should have yearly offspring", function(){
    assert.strictEqual(dinosaur1.offspringPerYear, 2);
  });

});
