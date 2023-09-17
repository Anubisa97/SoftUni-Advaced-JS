function negativePositiveNumbers(array) {
    let result = []
    for (const iterator of array) {
        if (iterator < 0) {
            result.unshift(iterator)
        } else {
            result.push(iterator)
        }
    }
return result
}
console.log(negativePositiveNumbers([7, -2, 8, 9]));