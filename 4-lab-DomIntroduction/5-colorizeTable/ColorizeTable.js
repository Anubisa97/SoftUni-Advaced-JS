function colorize() {
    const tables = document.getElementsByTagName("tr")
    let index = 0
    for (const el of tables) {
        index++
        if (index % 2 == 0) {
            el.style.background = "Teal"
        }
    }
}