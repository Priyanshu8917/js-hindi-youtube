// singleton //(if i declare literal types then singleton not make or if i make the constructor then singeton is used)
  

//Object.create  // it is called constructor method here singleton is used

 // object literals


 // how to declare symbols

 const mySym = Symbol("key1")
const JsUser = {
    name: "Priyanshu",
    "full name" : "Priyanshu Sarangi",

    // if you use this in sybmol form so the form is



   [mySym]: "mykey1",// if you want to prefer symbol then write [mysym]. if it is (mySym) of type then it is prefer string
    age: 18,
    location: "Odisha",
    email: "priyanshu@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]

}
//console.log(JsUser.email); // it is the one type of object access
//console.log(JsUser["email"]); // it is the another type of object access
//console.log(JsUser["full name"]);
//console.log(JsUser[mySym]);


// how to change object values

JsUser.email = "priyanshu@chatgpt.com"
 // if you want to lock this value no one can change this value so the concept is (freeze)
//Object.freeze(JsUser)  
JsUser.email = "priyanshu@microsoft.com"
//console.log(JsUser);


// here function is add
JsUser.greeting = function() {
    console.log("Hello JS user");
    
    }
JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`); // it is called string interpolation another thing is if you want to references the same objects then you write (this.)
}    
//console.log(JsUser.greeting());
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
    
    




 




