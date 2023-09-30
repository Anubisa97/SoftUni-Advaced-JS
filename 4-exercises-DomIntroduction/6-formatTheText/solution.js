function solve() {
  const input = document.getElementById("input").value;
  const outputEl = document.getElementById("output");
  const inputConverted = input.split(".");
  let sentences = [];

  for (const el of inputConverted) {
    if (el.length > 1) {
      sentences.push(el);
    }
  }

  let output = [];
  while (sentences.length >= 1) {
    if (sentences.length > 2) {
      output.push(sentences.splice(0, 3));
      outputEl.innerHTML += `<p> ${output.join(". ")} </p>`;
      output = [];
    } else if (sentences.length > 1) {
      output.push(sentences.splice(0, 2));
      outputEl.innerHTML += `<p> ${output.join(". ")} </p>`;
      output = [];
    } else if (sentences.length > 0) {
      output.push(sentences.splice(0, 1));
      outputEl.innerHTML += `<p> ${output.join(". ")} </p>`;
      output = [];
    }
  }
}
