const assert = require("assert")
const JurassicPark = require ("../jurassic_park.js")
const Dinosaur = require("../dinosaur.js")

describe ("enclosure", function(){
  let enclosure;
  let dinosaur1;
  let dinosaur2

  beforeEach(function(){
    enclosure = new JurassicPark();
    dinosaur1 = new Dinosaur("Tyrannosaurus", 2);
    dinosaur2 = new Dinosaur("Triceratops", 5);
  });

  it("should start of empty", function(){
      assert.deepStrictEqual(enclosure.herd, []);
  });

  it("should take in dinosaurs", function(){
      enclosure.addDinosaur(dinosaur1);
      assert.strictEqual(enclosure.herd.length, 1)
    })

  it("should find dinosaur by id", function(){
    enclosure.addDinosaur(dinosaur1);
    enclosure.addDinosaur(dinosaur2);
    assert.strictEqual( enclosure.findDinosaurByType("Triceratops"), 1);
  })

  it("should be able to remove dinosaurs", function(){
      enclosure.addDinosaur(dinosaur1);
      enclosure.addDinosaur(dinosaur2);
      assert.strictEqual(enclosure.removeDinosaurByType("Triceratops"), 1)
  })



  it("should get dinosaur types with offspring more than 2", function(){
    enclosure.addDinosaur(dinosaur1);
    enclosure.addDinosaur(dinosaur2);
    assert.strictEqual(enclosure.offspringMoreThan2(), 1)
  })

});
