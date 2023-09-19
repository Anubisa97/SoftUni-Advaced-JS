function addAndRemoveElements(input) {
  let result = [];
  let num = 0;
  input.forEach((el) => {
    num++;
    if (el === "add") {
      result.push(num);
    } else {
      result.pop();
    }
  });
  if (result.length) {
    console.log(result.join("\n"));
  } else {
    console.log("Empty");
  }
}
addAndRemoveElements(["remove", "remove", "remove"]);
