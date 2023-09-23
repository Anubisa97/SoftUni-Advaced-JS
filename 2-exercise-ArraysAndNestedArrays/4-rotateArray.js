function rotateArray(arr, n) {
  for (let index = 0; index < n; index++) {
    let holder = arr.pop();
    arr.unshift(holder);
  }
  console.log(arr.join(" "));
}
rotateArray(["1", "2", "3", "4"], 2);
rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15);
