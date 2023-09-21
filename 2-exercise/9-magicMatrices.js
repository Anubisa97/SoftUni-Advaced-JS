function magicMatrices(input) {
  let result = true;
  let row1 = 0;
  let row2 = 0;
  let col1 = 0;
  let col2 = 0;

  for (let rowI = 0; rowI < input.length - 1; rowI++) {

    for (let colI = 0; colI < input.length; colI++) {
      row1 += input[rowI][colI];
      row2 += input[rowI + 1][colI];
    }
    if (row1 !== row2) {
      result = false;
    }
    row1 = 0;
    row2 = 0;
  }

  for (let colI = 0; colI < input.length - 1; colI++) {

    for (let rowI = 0; rowI < input.length; rowI++) {
      col1 += input[rowI][colI];
      col2 += input[rowI][colI + 1];
    }
    if (col1 !== col2) {
      result = false;
    }
    col1 = 0;
    col2 = 0;
  }
  console.log(result);
}
magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
console.log("----------");
magicMatrices([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
console.log("----------");
magicMatrices([
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
]);
