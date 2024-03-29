function heroicInventory(input) {
  let res = [];
  for (const key in input) {
    let [name, level, items] = input[key].split(" / ");
    level = Number(level);
    items = items ? items.split(", ") : [];
    res.push({ name, level, items });
  }
  console.log(JSON.stringify(res));
}
heroicInventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
