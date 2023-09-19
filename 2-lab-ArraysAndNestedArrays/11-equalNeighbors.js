function equalNeighbors(input) {
  let counter = 0;

  for (let rowIndex = 0; rowIndex < input.length; rowIndex++) {
    for (let colIndex = 0; colIndex < input[rowIndex].length - 1; colIndex++) {
      if (input[rowIndex][colIndex] === input[rowIndex][colIndex + 1]) {
        counter++;
      }
    }
  }
  let rowSize = input[0].length;
  for (let colIndex = 0; colIndex < rowSize; colIndex++) {
    for (let rowIndex = 0; rowIndex < input.length - 1; rowIndex++) {
      if (input[rowIndex][colIndex] === input[rowIndex + 1][colIndex]) {
        counter++;
      }
    }
  }
  console.log(counter);
}
equalNeighbors([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);
console.log("----------------");
equalNeighbors([
  ["test", "yes", "yo", "ho"],
  ["well", "done", "yo", "6"],
  ["not", "done", "yet", "5"],
]);
