function rectangle(widthInput, heightInput, colorInput) {
  widthInput = Number(widthInput);
  heightInput = Number(heightInput);
  colorInput = colorInput[0].toUpperCase() + colorInput.slice(1);

  return {
    width: widthInput,
    height: heightInput,
    color: colorInput,

    calcArea() {
      let result = this.width * this.height;
      return result;
    },
  };
}

let rect = rectangle(4, 5, "red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
