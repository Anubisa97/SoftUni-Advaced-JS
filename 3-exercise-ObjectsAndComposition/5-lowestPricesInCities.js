function lowestPricesInCities(input) {
  let res = {};
  for (const key in input) {
    let [townName, productName, productPrice] = input[key].split(" | ");
    productPrice = Number(productPrice);

    if (!res.hasOwnProperty(productName)) {
      res[productName] = { townName, productPrice };
    } else if (res[productName].productPrice > productPrice) {
      res[productName].productPrice = productPrice;
      res[productName].townName = townName;
    }
  }
  for (const key in res) {
    console.log(`${key} -> ${res[key].productPrice} (${res[key].townName})`);
  }
}
// lowestPricesInCities([
//   "Sample Town | Sample Product | 1000",
//   "Sample Town | Orange | 2",
//   "Sample Town | Peach | 1",
//   "Sofia | Orange | 3",
//   "Sofia | Peach | 2",
//   "New York | Sample Product | 1000.1",
//   "New York | Burger | 10",
// ]);
lowestPricesInCities([
  "Sofia City | Audi | 100000",
  "Sofia City | BMW | 100000",
  "Sofia City | Mitsubishi | 10000",
  "Sofia City | Mercedes | 10000",
  "Sofia City | NoOffenseToCarLovers | 0",
  "Mexico City | Audi | 1000",
  "Mexico City | BMW | 99999",
  "Mexico City | Mitsubishi | 10000",
  "New York City | Mitsubishi | 1000",
  "Washington City | Mercedes | 1000",
]);
