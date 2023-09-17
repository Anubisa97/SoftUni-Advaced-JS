function cookingByNumbers(num, ...op) {
let numToPrint = num
    for (const el of op) {
        switch (el) {
            case "chop":
                numToPrint /= 2
                console.log(numToPrint);
                break;

                case "dice":
                numToPrint = Math.sqrt(numToPrint)
                console.log(numToPrint);
                break;

                case "spice":
                numToPrint += 1
                console.log(numToPrint);
                break;

                case "bake":
                numToPrint *= 3
                console.log(numToPrint);
                break;

                case "fillet":
                numToPrint *= 0.8
                console.log(numToPrint);
                break;
        
            default:
                break;
        }
    }
    
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
console.log(`-------------`);
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')