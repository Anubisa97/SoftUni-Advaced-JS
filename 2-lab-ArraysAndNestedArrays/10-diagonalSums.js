function diagonalSums(input) {
  let firstDiagonalSum = 0;
  let secondDiagonalSum = 0;

  // Cool version

  let firstIndex = 0;
  let secondIndex = input[0].length - 1;
  input.forEach((array) => {
    firstDiagonalSum += array[firstIndex++];
    secondDiagonalSum += array[secondIndex--];
  });

  // Boring version

  //   for (let i = 0; i < input.length; i++) {
  //     let reverseIndex = 1;
  //     for (let i2 = i; i2 <= i; i2++) {
  //       firstDiagonalSum += input[i][i2];
  //     }
  //     reverseIndex += i;
  //     let iSecond = input[i].length - reverseIndex;
  //     let counter = 0;
  //     for (let i2R = iSecond; counter < 1; i2R--) {
  //       secondDiagonalSum += input[i][i2R];
  //       counter++;
  //     }
  //   }

  console.log(`${firstDiagonalSum} ${secondDiagonalSum}`);
}
diagonalSums([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
diagonalSums([
  [20, 40],
  [10, 60],
]);
