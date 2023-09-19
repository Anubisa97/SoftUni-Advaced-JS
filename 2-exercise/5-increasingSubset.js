function increasingSubset(input) {
  let result = [];
  let biggestNum = input[0];
  input.forEach((element) => {
    if (element >= biggestNum) {
      result.push(element);
      biggestNum = element;
    }
  });
  return result;
}
console.log(increasingSubset([20, 3, 2, 15, 6, 1]));
