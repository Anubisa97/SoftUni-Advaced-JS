function smallestTwoNumbers(input) {
    input.sort((a, b) => a - b)
    let result = [input[0], input[1]]
    return result
}
console.log(smallestTwoNumbers([30, 15, 50, 5]));