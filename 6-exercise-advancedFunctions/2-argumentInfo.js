function argumentInfo(...input) {
  let count = {};
  for (const value of input) {
    let valueType = typeof value;

    if (!count.hasOwnProperty(valueType)) {
      count[valueType] = 1;
    } else {
      count[valueType]++;
    }
    console.log(`${valueType}: ${value}`);
  }

  let result = Object.entries(count).sort((a, b) => b[1] - a[1]);
  for (const pair of result) {
    console.log(`${pair[0]} = ${pair[1]}`);
  }
}
argumentInfo({ name: "bob" }, 3.333, 9.999);
