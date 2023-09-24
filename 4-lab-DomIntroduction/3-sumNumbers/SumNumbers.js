function calc() {
    const num1 = document.getElementById("num1").value
    const num2 = document.getElementById("num2").value
    let sum = +num1 + +num2
    document.getElementById("sum").value = sum
}
