const assert = require("assert")
const JurassicPark = require ("../jurassic_park.js")
const Dinosaur = require("../dinosaur.js")

describe ("enclosure", function(){
  let enclosure;
  let trex;
  let tri

  beforeEach(function(){
    enclosure = new JurassicPark();
    trex = new Dinosaur("Tyrannosaurus", 2);
    tri = new Dinosaur("Triceratops", 5);
  });

  it("should start of empty", function(){
      assert.deepStrictEqual(enclosure.herd, []);
  });

  it("should take in dinosaurs", function(){
      enclosure.addDinosaur(trex);
      assert.strictEqual(enclosure.herd.length, 1)
    })

  it("should be able to remove dinosaurs", function(){
      enclosure.addDinosaur(trex);
      enclosure.addDinosaur(tri);
      enclosure.removeDinosaur(trex);
      assert.strictEqual(enclosure.herd.length, 1)
  })

});
