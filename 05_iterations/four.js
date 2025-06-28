// in object i use for in loop and in array i use for of loop.(imp)

// here object will be created
const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    //console.log(myObject[key]);

     //if you want to run this then the syntax is

//    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

// here we use for in loop in array 

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
   // console.log(key);

    // how to define programming value into the key here the syntax is: 

   // console.log(programming[key]);
    
    
}

// in the map here i can use for in loop yes or no,

//const map = new Map()
//map.set('IN', "India")
//map.set('USA', "United State of America")
//map.set('Fr', "France")
//map.set('IN', "India")

//for (const key in map) {
  //  console.log(key);
    
        
//    } // here output will be not arrive.
