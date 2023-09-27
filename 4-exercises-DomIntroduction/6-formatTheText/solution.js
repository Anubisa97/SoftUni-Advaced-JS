function solve() {
  const input = document.getElementById("input").value;
  const outputEl = document.getElementById("output");
  const inputConverted = input.split(".");
  let sentences = [];

  for (const el of inputConverted) {
    if (el.length > 0) {
      sentences.push(el);
      console.log(el);
    }
  }

  let output = [];
  while (sentences.length >= 1) {
    if (output.length > 2) {
      outputEl.innerHTML += `<p> ${output.join(".")} </p>`;
      output = [];
    } else if (sentences.length === 1) {
      if (output.length === 0) {
        output.push(sentences.shift());
      }
      outputEl.innerHTML += `<p> ${output.join(".")} </p>`;
      output = [];
    } else if (sentences.length === 2 && output.length < 2) {
      outputEl.innerHTML += `<p> ${output.join(".")} </p>`;
      output = [];
    } else {
      output.push(sentences.shift());
    }
  }
}
