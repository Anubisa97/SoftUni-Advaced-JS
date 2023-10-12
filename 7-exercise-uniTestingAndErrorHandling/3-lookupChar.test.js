let { assert } = require("chai");
let { lookupChar } = require(`./3-lookupChar`);

describe("test with incorrect parameters", () => {
  it("test with reversed parameters", () => {
    assert.equal(
      lookupChar(1, "test"),
      undefined,
      "Return value must be undefined"
    );
  });
  it("test with incorrect type parameters", () => {
    assert.equal(
      lookupChar("1", "test"),
      undefined,
      "Return value must be undefined"
    );
    assert.equal(lookupChar(1, 1), undefined, "Return value must be undefined");
    assert.equal(
      lookupChar(["test"], [1]),
      undefined,
      "Return value must be undefined"
    );
    assert.equal(
      lookupChar({ obj: "test" }, 1),
      undefined,
      "Return value must be undefined"
    );
    assert.equal(
      lookupChar("test", 1.1),
      undefined,
      "Return value must be undefined"
    );
  });
  it("test with incorrect index size", () => {
    assert.equal(
      lookupChar("test", 10),
      "Incorrect index",
      "Return must be Incorrect index"
    );
    assert.equal(
      lookupChar("", 10),
      "Incorrect index",
      "Return must be Incorrect index"
    );
    assert.equal(
      lookupChar("test", -10),
      "Incorrect index",
      "Return must be Incorrect index"
    );
  });
  it("test with correct parameters", () => {
    assert.equal(
      lookupChar("test", 1),
      "e",
      "Return the character at the specified index in the string."
    );
    assert.equal(
      lookupChar("test", 0),
      "t",
      "Return the character at the specified index in the string."
    );
    assert.equal(
      lookupChar("test", 3),
      "t",
      "Return the character at the specified index in the string."
    );
  });
});
