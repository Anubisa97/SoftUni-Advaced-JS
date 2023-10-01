function attachEventsListeners() {
  let buttons = Array.from(document.querySelectorAll("input[type = button]"));
  const inputs = Array.from(document.querySelectorAll("input[type = text]"));

  for (const button of buttons) {
    button.addEventListener("click", clickHandler);
  }

  function clickHandler(e) {
    const button = e.currentTarget;
    const currentInput = Number(
      button.parentElement.querySelector("input[type = text]").value
    );
    const inputId = button.parentElement.querySelector("input[type = text]").id;

    let days = 0;

    switch (inputId) {
      case "days":
        days = print(currentInput);
        break;
      case "hours":
        days = print(currentInput / 24);
        break;
      case "minutes":
        days = print(currentInput / 24 / 60);
        break;
      case "seconds":
        days = print(currentInput / 24 / 60 / 60);
        break;
    }
  }

  function print(days) {
    inputs[0].value = days;
    inputs[1].value = days * 24;
    inputs[2].value = days * 24 * 60;
    inputs[3].value = days * 24 * 60 * 60;
  }
}
