// Immediately Invoked Function Expressions (IIFE)

// here a function will be write

// if interviewer ask you what is iiff: then you tell in global function here i faces so many pollution, so in global scope here whatever variable is declared , that variable will delected by using IIFE.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();


(function aurcode()  {
    console.log(`DB CONNECTED TWO`);
    

})();
// here another type arrow function .it is called simple IIFE.
((name) => {
    console.log(`DB CONNECTED TWO ${name}`); // here i use variable is ${}. here parameter is defined that's is name. 
   
})('Priyanshu')
