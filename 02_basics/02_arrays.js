const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros) // push is used in existing array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


//marvel_heros.concat(dc_heros)   // combines 2 or more arrays.this method returns a new array without modifying and existing arrays.

//console.log(marvel_heros);
// here marvel array value will arrive not dc-heros array not arrive so new code id here.


//const allheros = marvel_heros.concat(dc_heros)
//console.log(allheros);

//here another easy method is used that is spread.
const all_new_heros = [...marvel_heros, ...dc_heros]

//console.log(all_new_heros);

const another_array = [1,2,3, [4, 5, 6], 7, [6,7, [4,5]]]

const real_another_array = another_array.flat(Infinity)// here flat means create a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array);


console.log(Array.isArray("Priyanshu"))
console.log(Array.from("Priyanshu")) // create a array from an iterable object.
console.log(Array.from({name:"Priyanshu"})) // interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //Returns a new array from a set of elements.











