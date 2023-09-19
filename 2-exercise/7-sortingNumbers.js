function sortingNumbers(input) {
  let result = [];
  input
    .sort((a, b) => a - b)
    .forEach((element, i) => {
      result.push(input.shift());
      result.push(input.pop());
    });
  result.push(input.shift());
  result.push(input.pop());
  return result;
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
