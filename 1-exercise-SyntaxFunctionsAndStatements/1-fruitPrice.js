function fruitPrice(fruit, grams, price) {
  let weight = grams / 1000;
  let money = weight * price;
  console.log(
    `I need $${money.toFixed(2)} to buy ${weight.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}
fruitPrice("orange", 2500, 1.8);
fruitPrice("apple", 1563, 2.35);
