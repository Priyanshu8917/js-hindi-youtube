// Dates

let myDate = new Date()
//console.log(myDate);
// try to string
//console.log(myDate.toString());
 //console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toString());
//console.log(typeof myDate);// here date is object


//let myCreatedDate = new Date(2025, 0, 25)
//console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date(2025, 0, 25, 5, 3)
// console.log(myCreatedDate.toLocaleString());
//let myCreatedDate = new Date("2025-01-24")// (yy,mm,dd)
//console.log(myCreatedDate.toLocaleString());
let myCreatedDate = new Date("05-24-2025")
//console.log(myCreatedDate.toLocaleString());

// TimeStamp

let myTimestamp =  Date.now()
//console.log(myTimestamp);
//console.log(myCreatedDate.getTime());// here output will be given in millseconds
//console.log(Math.floor(Date.now()/1000)); // here output will be given in seconds


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getFullYear());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()}and the time`


newDate.toLocaleDateString('default', {
    weekday:"long",
})


















