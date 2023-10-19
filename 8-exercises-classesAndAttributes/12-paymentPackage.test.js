const { describe, it, beforeEach } = require("mocha");
let { PaymentPackage } = require("./12-paymentPackage");
let { assert } = require("chai");

describe("create instance", () => {
  let paymentPackage;
  beforeEach(() => {
    paymentPackage = new PaymentPackage("Dimi", 25);
  });

  it("name is correct", () => {
    assert.equal(
      paymentPackage._name,
      "Dimi",
      "Name has been set correctly to Dimi"
    );
  });
  it("value is correct", () => {
    assert.equal(
      paymentPackage._value,
      25,
      "Value has been set correctly to 25"
    );
  });
  it("VAT is correct", () => {
    assert.equal(paymentPackage._VAT, 20, "VAT has been set correctly to 20");
  });
  it("Active is correct", () => {
    assert.ok(paymentPackage._active, "Active has been set correctly to True");
  });
});
describe("test Accessor", () => {
  let paymentPackage;
  beforeEach(() => {
    paymentPackage = new PaymentPackage("Dimi", 25);
  });
  it("instance correct get and set name", () => {
    assert.equal(paymentPackage.name, "Dimi");
    paymentPackage.name = "Kiro";
    assert.equal(paymentPackage.name, "Kiro");
  });
  it("instance correct get and set value", () => {
    assert.equal(paymentPackage.value, 25);
    paymentPackage.value = 15;
    assert.equal(paymentPackage.value, 15);
    paymentPackage.value = 0;
    assert.equal(paymentPackage.value, 0);
  });
  it("instance correct get and set VAT", () => {
    assert.equal(paymentPackage.VAT, 20);
    paymentPackage.VAT = 25;
    assert.equal(paymentPackage.VAT, 25);
    paymentPackage.VAT = 0;
    assert.equal(paymentPackage.VAT, 0);
  });
  it("instance correct get and set Actove", () => {
    assert.ok(paymentPackage.active);
    paymentPackage.active = false;
    assert.notOk(paymentPackage.active);
  });
});
describe("test set incorrect value", () => {
  let paymentPackage;
  beforeEach(() => {
    paymentPackage = new PaymentPackage("Dimi", 10);
  });
  it("incorrect name", () => {
    assert.throws(() => new PaymentPackage("", 10));
    assert.throws(() => new PaymentPackage(10, 10));
  });
  it("incorrect value", () => {
    assert.throws(() => new PaymentPackage("Dimi", "10"));
    assert.throws(() => new PaymentPackage("Dimi", -10));
  });
  it("incorrect VAT", () => {
    assert.throws(() => (paymentPackage.VAT = "Kiro"));
    assert.throws(() => (paymentPackage.VAT = -10));
  });
  it("incorrect active", () => {
    assert.throws(() => (paymentPackage.active = "Kiro"));
    assert.throws(() => (paymentPackage.active = 10));
  });
});
describe("test Accessor", () => {
  let paymentPackage;
  beforeEach(() => {
    paymentPackage = new PaymentPackage("Dimi", 25);
  });
  it("instance correct get and set name", () => {
    assert.equal(paymentPackage.name, "Dimi");
    paymentPackage.name = "Kiro";
    assert.equal(paymentPackage.name, "Kiro");
  });
  it("instance correct get and set value", () => {
    assert.equal(paymentPackage.value, 25);
    paymentPackage.value = 15;
    assert.equal(paymentPackage.value, 15);
    paymentPackage.value = 0;
    assert.equal(paymentPackage.value, 0);
  });
  it("instance correct get and set VAT", () => {
    assert.equal(paymentPackage.VAT, 20);
    paymentPackage.VAT = 25;
    assert.equal(paymentPackage.VAT, 25);
    paymentPackage.VAT = 0;
    assert.equal(paymentPackage.VAT, 0);
  });
  it("instance correct get and set Actove", () => {
    assert.ok(paymentPackage.active);
    paymentPackage.active = false;
    assert.notOk(paymentPackage.active);
  });
});
describe("test toString", () => {
  let paymentPackage;
  beforeEach(() => {
    paymentPackage = new PaymentPackage("Dimi", 10);
  });
  it("test active property with active state", () => {
    let result = [
      "Package: Dimi",
      "- Value (excl. VAT): 10",
      "- Value (VAT 20%): 12",
    ].join("\n");
    assert.equal(paymentPackage.toString(), result);
  });
  it("test active property with active state", () => {
    paymentPackage.active = false;
    let result = [
      "Package: Dimi (inactive)",
      "- Value (excl. VAT): 10",
      "- Value (VAT 20%): 12",
    ].join("\n");
    assert.equal(paymentPackage.toString(), result);
  });
});
