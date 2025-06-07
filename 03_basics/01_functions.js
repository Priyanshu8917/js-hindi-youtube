function sayMyname() { // () this is called function syntax
console.log("P");
console.log("R");
console.log("I");
console.log("Y");
console.log("A");
console.log("N");
console.log("S");
console.log("H");
console.log("U");
  //all are functions definitation  
}

//sayMyname()//  it is called reference. if you write ()before defination of function then that is called Execution.

//sayMyname() // it means what is function key


 
// function addTwoNumbers(number1, Number2) {
//      console.log(number1+Number2);
//  }


 function addTwoNumbers(number1, number2) {

    //  let result = number1 + number2
    //  console.log("Priyanshu");
    //  return result
 

    // another type code
    return number1 + number2
 }

     
 


const result = addTwoNumbers(3, 5)

//console.log("Result: ",result);


function loginUSerMessage(username = "Sam"){
    // if(username === undefined){
    //     console.log("please enter a username");
    //     return
    if (!username) {
        console.log("please enter a username");
        return
        
        
    }
        
 return `${username} Just logged in `

    }
   


//console.log(loginUSerMessage("priyanshu"))
//console.log(loginUSerMessage(""));
//console.log(loginUSerMessage("Priyanshu"));

function calculateCartPrice(val1, val2, ...num1){ //here . means rest operator
  return num1
}
//console.log(calculateCartPrice(200, 400, 500, 2000));

const user ={
  username: "Priyanshu",
  price: 200
}
// here object will be passed
function handleObject(anyobject){
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
  

}
// here function is called
//handleObject(user)
handleObject({
  username: "Priyanshu",
  price: 499

})
 // here array will be passed
 const myNewArray = [200, 400, 100, 600]
 //here i define a function and he accept the array value and return the second value.
 function returnsecondValue(getArray) {
  return getArray[2]

 }
 //console.log(returnsecondValue(myNewArray));
 // here another type to console.log
console.log(returnsecondValue([200, 400, 500, 1000]));
 
 




    
