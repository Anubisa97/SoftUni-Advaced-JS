function processOddPositions(input) {
    let oddPositions = []
    for (let i = 0; i < input.length; i++) {
        if (i % 2 != 0) {
            oddPositions.push(input[i])
        }
    }
   let result = oddPositions.reverse().map((x) => x * 2)

    return result
}
console.log(processOddPositions([10, 15, 20, 25]));
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));