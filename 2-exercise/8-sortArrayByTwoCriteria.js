function sortArrayByTwoCriteria(input) {

    const sorting = (a, b) => 
        a.length - b.length || a.localeCompare(b);
    
    input.sort(sorting)
    console.log(input.join("\n"));
    
}
sortArrayByTwoCriteria(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']

)