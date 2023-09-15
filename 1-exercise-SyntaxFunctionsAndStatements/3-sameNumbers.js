function sameNumbers(input) {
  let arr = input.toString().split("");
  let firstNum = +arr.shift();
  let isSame = true;
  let sum = firstNum;
  arr.forEach((element) => {
    if (+element != firstNum) {
      sum += +element;
      isSame = false;
    } else {
      sum += +element;
    }
  });
  console.log(isSame);
  console.log(sum);
}
sameNumbers(222222222);
