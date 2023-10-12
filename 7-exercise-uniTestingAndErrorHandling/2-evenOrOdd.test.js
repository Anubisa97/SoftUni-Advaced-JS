let { assert } = require("chai");
let { isOddOrEven } = require(`./2-evenOrOdd`);

describe("test with incorrect parameter", () => {
  it("test with object", () => {
    assert.equal(
      isOddOrEven({ obj: "test" }, undefined, "Return value must be undefined")
    );
  });
  it("test with array", () => {
    assert.equal(
      isOddOrEven(["test"], undefined, "Return value must be undefined")
    );
  });
  it("test with number", () => {
    assert.equal(isOddOrEven(10, undefined, "Return value must be undefined"));
  });
});

describe("test with correct data", () => {
  it("test with even word", () => {
    assert.equal(isOddOrEven("titi"), "even", "return value to 'even'");
    assert.equal(isOddOrEven("[titi]"), "even", "return value to 'even'");
  });
  it("test with even number", () => {
    assert.equal(isOddOrEven("1111"), "even", "return value to 'even'");
    assert.equal(isOddOrEven("[1111]"), "even", "return value to 'even'");
  });
  it("test with array", () => {
    assert.equal(isOddOrEven("[]"), "even", "return value to 'even'");
  });
  it("test with odd word", () => {
    assert.equal(isOddOrEven("tit"), "odd", "return value to 'odd'");
    assert.equal(isOddOrEven("[tit]"), "odd", "return value to 'odd'");
  });
  it("test with odd number", () => {
    assert.equal(isOddOrEven("111"), "odd", "return value to 'odd'");
    assert.equal(isOddOrEven("[111]"), "odd", "return value to 'odd'");
  });
});
