function lastKNumbersSequence(number, elementsToFind) {
    let result = [1]
    for (let i = 0; i < number - 1; i++) {
        let sum = result[i]
        for (let index = 1; index < elementsToFind; index++) {  
            if (result[i - index]) {
              sum += result[i - index]  
            }
        }
        result.push(sum)
        sum = 0
    }
    return result
}
console.log(lastKNumbersSequence(6, 3));
console.log(lastKNumbersSequence(8, 2));