function greatestCommonDivisor(a, b) {
  let GCD = 0;

  for (let i = 1; i <= a && i <= b; i++) {
    if (a % i == 0 && b % i == 0) {
      GCD = i;
    }
  }
  console.log(GCD);
}
greatestCommonDivisor(2154, 458);
