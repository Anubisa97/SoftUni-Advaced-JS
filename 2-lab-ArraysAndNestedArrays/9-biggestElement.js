function biggestElement(arr) {
    let result = 0

    for (const el of arr) {
        el.sort((a, b) => a - b)
        let biggestEl = el[el.length -1]

        if (biggestEl >= result) {
            result = biggestEl
        }
    }
    return result
}
console.log(biggestElement([[20, 50, 10],
    [8, 33, 145]]));
console.log(biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]));