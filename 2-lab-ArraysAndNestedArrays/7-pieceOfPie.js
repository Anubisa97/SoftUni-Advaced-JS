function pieceOfPie(arr, start, end) {
    let result = []
    for (let index = arr.indexOf(start); index <= arr.indexOf(end); index++) {
        result.push(arr[index])
    }
    return result
}
console.log(pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'));