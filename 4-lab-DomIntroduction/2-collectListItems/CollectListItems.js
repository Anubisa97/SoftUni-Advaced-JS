function extractText() {
    let items = document.querySelectorAll("ul#items li")
    let textArea = document.querySelector("#result")
    for (const node of items) {
        textArea.value += node.textContent + "\n"
    }
     
}