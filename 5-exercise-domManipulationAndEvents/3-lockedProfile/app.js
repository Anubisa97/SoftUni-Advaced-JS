function lockedProfile() {
  const buttons = Array.from(document.querySelectorAll("button"));

  for (const button of buttons) {
    button.addEventListener("click", clickHandler);
  }

  function clickHandler(e) {
    let radioUnlock = e.target.parentElement.children[4].checked;
    let showMore = e.target.parentElement.children[9].style;

    if (showMore.display == "" && radioUnlock === true) {
      showMore.display = "block";
    } else if (showMore.display == "block" && radioUnlock === true) {
      showMore.display = "";
    }
  }
}
