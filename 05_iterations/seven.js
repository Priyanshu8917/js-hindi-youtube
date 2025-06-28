// Map function
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNums = myNumbers.map( (num) => num + 10)
// if here i use curly braces so the code is

//const newNums = myNumbers.map( (num) => { return  num + 10})


// here i use method that is called chaining.

const newNums = myNumbers
                 .map((num) => num *10)
                 .map((num) => num + 1)
                 .filter((num) => num >= 40)
                 
console.log(newNums);
