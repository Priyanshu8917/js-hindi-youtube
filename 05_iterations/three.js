// for of used in array.

// in array we use string ["", "", ""]
//in array we use objects [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
   // console.log(num);
    
}
// here i take string
const greetings = "Helloworld!"
for (const greet of greetings) {
   // console.log(`Each char is ${greet}`);
    
}
// Maps,if you give two equal value then output will be arrive one value because in maps he will be give unique value.
 
const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")

//console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}
 // here object will be here then code is:
const myObject = {
    game1: 'NFS',
    game2: 'spiderman'
} 

//for (const [key, value] of myObject) {
  //  console.log(key, ':-', value);
//}  here myObject is not iterable.

