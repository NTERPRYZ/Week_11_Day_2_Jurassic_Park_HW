const assert = require("assert")
const JurassicPark = require ("../jurassic_park.js")
const Dinosaur = require("../dinosaur.js")

describe ("enclosure", function(){
  let enclosure;
  let trex;

  beforeEach(function(){
    enclosure = new JurassicPark();
    trex = new Dinosaur("Tyrannosaurus", 2);
  });

  it("should start of empty", function(){
    assert.deepStrictEqual(enclosure.herd, []);
  });

});
