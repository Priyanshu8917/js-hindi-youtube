// here new loop will be written that us for each loop.
const coding = ["js", "ruby", "java", "Python", "cpp"]

//coding.forEach( function (val){
  //  console.log(val);
    
 //})
 //here i use arrow function

 //coding.forEach(() => { 
 //   console.log(item);
    
 //} )

// here function will be written.

//function printMe(item){
   // console.log(item);
    
//}
//coding.forEach(printMe)

//coding.forEach((item, index, arr) => {
  //  console.log(item, index, arr);
    

//})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"

    },
    {
        languageName: "java",
        languageFileName: "java"

    },
    {
        languageName: "python",
        languageFileName: "py"

    },
    

]

myCoding.forEach( (item) => {

    console.log(item.languageName);
    
    
})

