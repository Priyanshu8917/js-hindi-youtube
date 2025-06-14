// here object will be created

//in browser there is a global object that is called window object. ....this is interview questions. 

const user = {
    username: "Priyanshu",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to website`);
        console.log(this);
        
        
    }

}

user.welcomeMessage()
user.username = "Ruma"
user.price = 1000
user.welcomeMessage()

console.log(this);

//function chai(){
  //  let username = "priyanshu"
   // console.log(this.username);
    
//}

//chai()

//how to declare function by using arrow function. here another declare function method.

//const chai = function (){
//    let username = "Priyanshu"
//  console.log(this.username);
    
//}

// that is called the arrow function.
const chai =  () => {
    let username = "Priyanshu"
    //console.log(this.username);
    console.log(this);
    
}    
    
// chai()

// here basic syntax of arrow function
//() => {}

//const addTwo = (num1, num2) => {  (it is called basic arrow function)in curly braces return is used.
//    return num1 + num2
//}   

// or this is called implicity return. here para syntactics is not used. here not write return.implicity means return.


//const addTwo = (num1, num2) =>  num1 + num2

//here another type of code

//const addTwo = (num1, num2) => ( num1 + num2) //if you use parasyntactics then here return keyword not written here.

// if you return object then concept is to wrap the parasyntactics.
const addTwo = (num1, num2) => ({username: "Priyanshu"})

   
console.log(addTwo(3,4));

//const myArray = [2, 5, 3, 7, 8]
//myArray.forEach()
// here foreach means it performs the specified action for each elements inan array.

