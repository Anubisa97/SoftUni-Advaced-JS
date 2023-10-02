function encodeAndDecodeMessages() {
  const encodeText = document.querySelectorAll("textarea")[0];
  const decodeText = document.querySelectorAll("textarea")[1];
  const encodeButton = document.querySelectorAll("button")[0];
  const decodeButton = document.querySelectorAll("button")[1];

  encodeButton.addEventListener("click", encodeHandler);
  decodeButton.addEventListener("click", decodeHandler);

  function encodeHandler(e) {
    let text = encodeText.value.split("");
    let codedText = "";
    for (const char of text) {
      let value = char.charCodeAt();
      value++;
      codedText += String.fromCharCode(value);
    }
    decodeText.value = codedText;
    encodeText.value = "";
  }
  function decodeHandler(e) {
    let text = decodeText.value.split("");
    let decoded = "";
    for (const char of text) {
      let value = char.charCodeAt();
      value--;
      decoded += String.fromCharCode(value);
    }
    decodeText.value = decoded;
  }
}
