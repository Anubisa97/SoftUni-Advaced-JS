function sumFirstLast(arr) {
    let result = Number(arr.shift()) + Number(arr.pop())
    return result
}
console.log(sumFirstLast(['20', '30', '40']));