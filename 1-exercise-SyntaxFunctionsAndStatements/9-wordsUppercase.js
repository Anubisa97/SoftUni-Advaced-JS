function wordsUppercase(text) {
    return text.split(/[^\w]+/gm)
    .join(" ")
    .trim()
    .split(" ")
    .map(x => {
        if (x) { return x.toUpperCase() }})
    .join(", ")
}
console.log(wordsUppercase('Hi, how are you?'));