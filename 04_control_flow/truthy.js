const userEmail = [] // "p@priyanshu.ai" yi hona chahiya.

if (userEmail) {
    console.log("got user email");
} else {
    console.log("Don't have user email");
    
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined,NaN

// truthy values
// "0" (if the value is in the string then it is called truthy values ). 'false'," ",[], {}, function(){} it is called empty function.

//if (userEmail.length === 0) {
 //   console.log("Array is Empty");
// }


// if the object is empty then the code is
const emptyobj = {}

if (Object.keys(emptyobj).length === 0) {
    console.log("object is empty");
}


// Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
;

