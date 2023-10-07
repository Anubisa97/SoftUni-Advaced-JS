function solution() {
  let ingredients = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };

  let meals = {
    apple: {
      carbohydrate: 1,
      flavour: 2,
    },
    lemonade: {
      carbohydrate: 10,
      flavour: 20,
    },
    burger: {
      carbohydrate: 5,
      fat: 7,
      flavour: 3,
    },
    eggs: {
      protein: 5,
      fat: 1,
      flavour: 1,
    },
    turkey: {
      protein: 10,
      carbohydrate: 10,
      fat: 10,
      flavour: 10,
    },
  };
  return function instruction(input) {
    let [command, ingredient, count] = input.split(" ");
    count = Number(count);
    switch (command) {
      case "restock":
        return restock(ingredient, count);
        break;
      case "prepare":
        return prepare(ingredient, count);
        break;
      case "report":
        return report();
        break;
    }
  };
  function restock(microelement, quantity) {
    ingredients[microelement] += quantity;
    return "Success";
  }

  function prepare(recipe, quantity) {
    let neededIngredients = {};
    for (let [key, value] of Object.entries(meals[recipe])) {
      let neededQuantity = value * quantity;
      if (ingredients[key] < neededQuantity) {
        return `Error: not enough ${key} in stock`;
      }
      neededIngredients[key] = neededQuantity;
    }

    for (let [key, value] of Object.entries(neededIngredients)) {
      ingredients[key] -= value;
    }
    return "Success";
  }

  function report() {
    return `protein=${ingredients["protein"]} carbohydrate=${ingredients["carbohydrate"]} fat=${ingredients["fat"]} flavour=${ingredients["flavour"]}`;
  }
}
let manager = solution();
console.log(manager("prepare turkey 1"));
console.log(manager("restock protein 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("report"));
