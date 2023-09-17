function evenPositionElement(input) {
    let result = []
    for (let index = 0; index < input.length; index++) {
        if (index % 2 == 0) {
            result.push(input[index])
        }
        
    }
    console.log(result.join(" "));
}
evenPositionElement(['20', '30', '40', '50', '60'])
evenPositionElement(['5', '10'])