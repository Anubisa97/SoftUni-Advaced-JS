function validate() {
  const inputRef = document.getElementById("email");
  const pattern = /[a-z]+\@[a-z]+\.[a-z]+/;

  inputRef.addEventListener("change", validateEmail);

  function validateEmail(ev) {
    const value = inputRef.value;
    if (pattern.test(value)) {
      inputRef.classList.remove("error");
    } else {
      inputRef.classList.add("error");
    }
  }
}
