function storeCatalogue(input) {
  let object = {};

  for (const key in input) {
    let [name, price] = input[key].split(" : ");
    object[name] = price;
  }

  let sorted = Object.keys(object)
    .sort()
    .reduce((obj, key) => {
      obj[key] = object[key];
      return obj;
    }, {});

  let groups = {};
  for (const key in sorted) {
    if (!groups.hasOwnProperty(key[0])) {
      groups[key[0]] = [{ [key]: sorted[key] }];
    } else {
      groups[key[0]].push({ [key]: sorted[key] });
    }
  }

  for (const line in groups) {
    console.log(line);
    for (const iterator of groups[line]) {
      for (const key in iterator) {
        console.log(`  ${key}: ${iterator[key]}`);
      }
    }
  }
}
storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
console.log("-----------");
storeCatalogue([
  "Banana : 2",
  "Rubic's Cube : 5",
  "Raspberry P : 4999",
  "Rolex : 100000",
  "Rollon : 10",
  "Rali Car : 2000000",
  "Pesho : 0.000001",
  "Barrel : 10",
]);
