//  primitive

// 7 types : string(call by value), number, Boolean , null, undefined, sybmol(means a value will put as a unique ) BigInt(if the value is not handle then use this)


const score = 100
const scorevalue = 100.3


const isLoggedIn = false
const outsideTemp = null //(empty)
// let userEmail = undefined(sentence is right)
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); 


// const bigNumber = 234567891234123456n



// Reference types(or)(Non-primitive)


// Array, objects, Functions (array and objects returntype will be functions but functions return will be called object functions)


//Array
const heros = ["shaktiman", "naagraj", "doga"];
//objects
let myObj = {
    name: "Priyanshu",
    age: 22,

}

//functions

const myFunction = function(){
console.log("Hello World");
}

console.log(typeof  myFunction ); //(returntype will be objective function)


// https://262.ecma-international.org/5.1/#sec-11.4.3





// ************************************************************************************


// Memory is divided into 2 types.they are : stack is used in (Primitive datatypes),heap memory is used in (non-primitive datatypes)



let myYoutubename = "Priyanshusarangidotcom"

let anothername = myYoutubename
 anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);


let userone = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userone


userTwo.email = "Priyanshu@google.com"

console.log(userone.email);
console.log(userTwo.email);




 



