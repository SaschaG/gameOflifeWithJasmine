var getTrue = require('../app/main'); 

describe("A suite", function() {
  it("contains spec with an expectation", function() {
  	var a = getTrue();
    expect(a).toBe(true);
  });
});