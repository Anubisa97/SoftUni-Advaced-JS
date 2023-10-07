function calculator() {
  let num1;
  let num2;
  let res;

  return {
    init: function (selector1, selector2, resultSelector) {
      num1 = document.querySelector(`${selector1}`);
      num2 = document.querySelector(`${selector2}`);
      res = document.querySelector(`${resultSelector}`);
    },
    add: function () {
      let numA = Number(num1.value);
      let numB = Number(num2.value);
      res.value = numA + numB;
    },
    subtract: function () {
      let numA = Number(num1.value);
      let numB = Number(num2.value);
      res.value = numA - numB;
    },
  };
}
const calculate = calculator();
calculate.init("#num1", "#num2", "#result");
