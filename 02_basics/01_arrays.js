// Array

const myArr = [0, 1, 2, 3, 4, 5,  ]
const myHeros = ["shaktiman", "naagraj"]
//how to declare array another form is to used keyword 
const myArr2 = new Array (1, 2, 3, 4 )
//console.log(myArr[1]);


// Array Methods


// myArr.push(6)// push is used to add the value
// myArr.push(7)
// myArr.pop()// pop means it is used to remove the value of the last array

//myArr.unshift(9)// it means it inserts a new elements at the start of the array 
//myArr.shift()//removes the 1st elements of the array


//console.log(myArr.includes(9));// it finds the number thats present in the array or not and if it present then give true or not present then give false
//console.log(myArr.indexOf(19));
//console.log(myArr.indexOf(3));// it means here the array value is present or not if present then return which index otherwise give -1


//const newArr = myArr.join()// add all elements of array into a string 


//console.log(myArr);
//console.log(newArr);
//console.log(typeof newArr);



// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)// here 1 is include,2nd is include and 3 is not include

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)// here the 1,2,3 value will be remove and give the remaining value return the deleted elements
console.log("c ", myArr)
console.log(myn2);







