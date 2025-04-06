const score = 100 // Number literal
const newscore = new Number(200) // Number as object 
console.log(score)
console.log(newscore) //[Number: 200]

let a = 100;
let b = new Number(100);

console.log(a === b); // false ❌ (different types)
console.log(a == b);  // true ✅ (type conversion)


console.log(typeof(newscore.toString()))
console.log(score.toFixed(1)) // used to create precision of desired decimals

const otherNumber = 1233.2;
console.log(otherNumber.toPrecision(3)) // it returns the string with rounding of the significant numbers which we learned in class 11 

const hunreds = 100000000
console.log(hunreds.toLocaleString('en-IN')) // if do not pass en-IN then it returns the values in us standards



// ******************Maths
console.log(Math) //Math is a built-in object in JavaScript.
console.log(Math.abs(-4))
console.log(Math.round(2.3))
console.log(Math.ceil(2.3))
console.log(Math.floor(2.3))
console.log(Math.min(2.3,4.5,1.5))
console.log(Math.max(2.3,4.5,6))
console.log(Math.random()) // gives the random no between 0 and 1
