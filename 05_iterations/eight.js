// reduce , here i use only function not arrow function
const mynums = [1, 2, 3]

//const myTotal = mynums.reduce(function(acc, currval){
  //  console.log(`acc: ${acc} and currval: ${currval}`);
  //  return acc + currval
    
//}, 0)

const myTotal = mynums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
 // if you array this array then here use reduce function.

const priceTopay = shoppingCart.reduce((acc, item) => acc + item.
price,0)
 console.log(priceTopay);
 
