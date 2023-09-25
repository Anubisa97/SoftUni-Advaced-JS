function subtract() {
    const inputOne = document.getElementById("firstNumber").value
    const inputTwo = document.getElementById("secondNumber").value
    let sum = Number(inputOne) - Number(inputTwo)
    document.getElementById("result").textContent = sum
}