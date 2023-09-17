function biggerHalf(arr) {
    arr.sort((a, b) => b - a)    
    let result = []
    
    for (let index = 0; index < Math.round(arr.length / 2); index++) {
        result.unshift(arr[index])
    }

    return result
}
console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));