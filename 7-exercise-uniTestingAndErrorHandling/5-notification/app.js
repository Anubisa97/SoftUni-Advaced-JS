function notify(message) {
  const divRef = document.getElementById("notification");
  divRef.textContent = message;
  divRef.style.display = "block";

  divRef.addEventListener("click", hideElement);

  function hideElement(ev) {
    divRef.style.display = "none";
  }
}
