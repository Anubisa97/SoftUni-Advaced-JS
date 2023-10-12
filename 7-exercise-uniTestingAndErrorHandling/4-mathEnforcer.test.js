let { assert } = require("chai");
let { mathEnforcer } = require(`./4-mathEnforcer`);

describe("test addFive function", () => {
  it("testing non numbers for undefined", () => {
    assert.equal(
      mathEnforcer.addFive("1"),
      undefined,
      "should return undefined"
    );
    assert.equal(
      mathEnforcer.addFive([1]),
      undefined,
      "should return undefined"
    );
    assert.equal(
      mathEnforcer.addFive({ obj: 1 }),
      undefined,
      "should return undefined"
    );
  });
  it("testing correct tests with adding 5", () => {
    assert.equal(mathEnforcer.addFive(5), 10, "adding five");
    assert.equal(mathEnforcer.addFive(10.51), 15.51, "adding five");
    assert.equal(mathEnforcer.addFive(-5.5), -0.5, "adding five");
    assert.equal(mathEnforcer.addFive(0), 5, "adding five");
    assert.equal(mathEnforcer.addFive(-5), 0, "adding five");
    assert.equal(mathEnforcer.addFive(-10), -5, "adding five");
  });
});
describe("test subtractTen function", () => {
  it("testing non numbers for undefined", () => {
    assert.equal(
      mathEnforcer.subtractTen("1"),
      undefined,
      "should return undefined"
    );
    assert.equal(
      mathEnforcer.subtractTen([1, 2]),
      undefined,
      "should return undefined"
    );
    assert.equal(
      mathEnforcer.subtractTen({ obj: 1 }),
      undefined,
      "should return undefined"
    );
  });
  it("testing correct tests with subtracting 10", () => {
    assert.equal(mathEnforcer.subtractTen(5), -5, "subtracting 10");
    assert.equal(mathEnforcer.subtractTen(10), 0, "subtracting 10");
    assert.equal(mathEnforcer.subtractTen(10.5), 0.5, "subtracting 10");
    assert.equal(mathEnforcer.subtractTen(-10.5), -20.5, "subtracting 10");
    assert.equal(mathEnforcer.subtractTen(0), -10, "subtracting 10");
    assert.equal(mathEnforcer.subtractTen(-5), -15, "subtracting 10");
  });
});
describe("test sum function", () => {
  it("testing non numbers for undefined", () => {
    assert.equal(
      mathEnforcer.sum("1", 1),
      undefined,
      "should return undefined"
    );
    assert.equal(
      mathEnforcer.sum("1", "1"),
      undefined,
      "should return undefined"
    );
    assert.equal(
      mathEnforcer.sum(1, [1]),
      undefined,
      "should return undefined"
    );
    assert.equal(
      mathEnforcer.sum(1, { test: 1 }),
      undefined,
      "should return undefined"
    );
    assert.equal(
      mathEnforcer.sum([1], 1),
      undefined,
      "should return undefined"
    );
    assert.equal(
      mathEnforcer.sum(1, "1"),
      undefined,
      "should return undefined"
    );
    assert.equal(mathEnforcer.sum({}, 1), undefined, "should return undefined");
  });
  it("testing correct tests with sum two numbers", () => {
    assert.equal(mathEnforcer.sum(0, 0), 0, "summing two numbers");
    assert.equal(mathEnforcer.sum(5, 5), 10, "summing two numbers");
    assert.equal(mathEnforcer.sum(10.5, 5), 15.5, "summing two numbers");
    assert.equal(mathEnforcer.sum(10.5, 4.6), 15.1, "summing two numbers");
    assert.equal(mathEnforcer.sum(-10.5, -4.6), -15.1, "summing two numbers");
    assert.equal(mathEnforcer.sum(0, 1), 1, "summing two numbers");
    assert.equal(mathEnforcer.sum(-5, -15), -20, "summing two numbers");
  });
});
