function toggle() {
    let buttonState = document.getElementsByClassName("button")[0]
    let div = document.getElementById("extra")
    if (div.style.display == "none") {
        div.style.display = "block"
        buttonState.textContent = "Less"
    } else {
        div.style.display = "none"
        buttonState.textContent = "More"
    }

}