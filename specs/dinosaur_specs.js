const assert = require ("assert")
const Dinosaur = require ("../dinosaur.js")

describe("Dinosaur", function(){

  let trex;

  beforeEach(function(){
    trex = new Dinosaur("Tyrannosaurus", 2);
  });

  it("should have a type", function(){
    assert.strictEqual(trex.type, "Tyrannosaurus")
  });

  it("should have yearly offspring", function(){
    assert.strictEqual(trex.offspringPerYear, 2);
  });

});
