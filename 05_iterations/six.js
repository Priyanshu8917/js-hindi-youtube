//const coding = ["js", "ruby", "java", "Python", "cpp"]


//const values = coding.forEach((item) => { // (here foreach loop not return the values)
 //  console.log(item);
  //  return item
//} )

//console.log(values);

// another example here i used number.
const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNums = mynums.filter((num) => num > 4) // filter is a call back function.hereanother type arrow function called that is one type call of arrow function.

//const newNums = mynums.filter( (num) => {
 //  return num > 4 // if you st with curly braces then here scope will be st so here always use return.
//})
//console.log(newNums);

// here i use foreach loop
//const newNums = []

//mynums.forEach( (num) => {
 //   if (num > 4) {
  //    newNums.push(num)  
 //   }
//})

//console.log(newNums);

const books = [
    { title: 'Book one', genre: 'fiction', publish: 1981,
        edition: 2004 },
    { title: 'Book two', genre: 'Non-fiction', publish: 1992,
        edition: 2008 },
    { title: 'Book three', genre: 'History', publish: 1999,
        edition: 2007 },
    { title: 'Book four', genre: 'Non-fiction', publish: 1989,
        edition: 2010 },
    { title: 'Book five', genre: 'Science', publish: 2009,
        edition: 2014 },
    { title: 'Book six', genre: 'fiction', publish: 1987,
        edition: 2010 },
    { title: 'Book seven', genre: 'History', publish: 1986,
        edition: 1996 },
    { title: 'Book eight', genre: 'Science', publish: 2011,
        edition: 2016 },
    { title: 'Book nine', genre: 'Non-fiction', publish: 1981,
        edition: 1989 },     
];

let userBooks = books.filter( (bk) => bk.genre === 'History') // here const will be not written here because if you used const you dont want to change the value later and here let will be used,let is used when you want to change the value of the variables later.

 userBooks = books.filter( (bk) => { 
     return bk.publish >= 1995 && bk.genre === "History"}) // if you check another condition then use && symbol.
console.log(userBooks);




