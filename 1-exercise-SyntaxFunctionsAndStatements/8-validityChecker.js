function validityChecker(x1, y1, x2, y2) {
  const output = (x1, y1, x2, y2) => {
    let checker = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    let output = "";

    if (Number.isInteger(checker)) {
      output = `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`;
    } else {
      output = `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;
    }

    console.log(output);
  };

  output(x1, y1, 0, 0);
  output(x2, y2, 0, 0);
  output(x1, y1, x2, y2);
}
validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);
