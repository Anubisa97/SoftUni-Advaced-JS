function juiceFlavors(data) {
  let store = new Map();
  let storeBottle = new Map();

  for (const line of data) {
    let [type, quantity] = line.split(" => ");

    if (!store.has(type)) {
      store.set(type, +quantity);
    } else {
      store.set(type, store.get(type) + +quantity);
    }

    if (store.get(type) >= 1000) {
      let bottle = parseInt(store.get(type) / 1000);
      store.set(type, store.get(type) - bottle * 1000);
      if (!storeBottle.has(type)) {
        storeBottle.set(type, bottle);
      } else {
        storeBottle.set(type, storeBottle.get(type) + bottle);
      }
    }
  }
  for (let el of storeBottle) {
    console.log(`${el[0]} => ${el[1]}`);
  }
}

juiceFlavors([
  "Kiwi => 234",
  "Pear => 2345",
  "Watermelon => 3456",
  "Kiwi => 4567",
  "Pear => 5678",
  "Watermelon => 6789",
]);
