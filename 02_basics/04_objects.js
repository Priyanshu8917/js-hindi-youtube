//const tenderUser = new Object() //this is a singleton objects
const tenderUser = {} // this is a not singeleton objects

tenderUser.id = "123abc"
tenderUser.name = "Priyanshu"
tenderUser.isLoggedIn = false

//console.log(tenderUser);

const regularUser = {
    email: "Priyanshu@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Priyanshu",
            lastname: "Sarangi"
        }

    }  
}
//console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2 }
//const obj3 = Object.assign({}, obj1, obj2) // it returns the target objects

const obj3 = {...obj1,...obj2} // here spread operator is used
//console.log(obj3);

// if values is arrived in the database so i used this concepts.

const users = [
    {
        id: 1,
        email: "priya@gmail.com"
    },
    {
        id: 1,
        email: "priya@gmail.com"

    },
    {
        id: 1,
        email: "priya@gmail.com"

    },
]   
 users[1].email
 console.log(tenderUser);

 console.log(Object.keys(tenderUser)); //keys means: Returns the names of enumerable string properties and methods of an objects.
 console.log(Object.values(tenderUser));// returns an array of values of the enumerable own properties of an objects.
 console.log(Object.entries(tenderUser));//returns of array of key/values of the enumerable own properties of an object.

 console.log(tenderUser.hasOwnProperty("isLoggedIn"));
 
  
 
 
 



