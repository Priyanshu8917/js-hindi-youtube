//Scope  level and mini hoisting in js.

// here scope is 2 types one is block scope, another one is global scope.
//var c = 300
let a = 300

// {} is called as scope .
if (true) {
let a = 10
const b = 20
//console.log("INNER: ", a);

}

    



//console.log(a);
//console.log(b);
//console.log(c);

// nested scoop : here child  function access the parent function value.
 
function one() {
    const username = "Priyanshu"

    function two() {
        const website = "Youtube"
        console.log(username);
        
    }
    //console.log(website);

    two()
    
    
}

//one()

if (true) {
    const username = "priyanshu"
    if (username === "priyanshu") {
        const website = " youtube"
        //console.log(username + website);
        
        
    }
    //console.log(website);
    
    
}
//console.log(username);


// ++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++
console.log(addone(5));

function addone(num){
    return num + 1
}

const addTwo = function(num){
    return num + 2

}
console.log(addTwo(5));





