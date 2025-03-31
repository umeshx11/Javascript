const score = 100
const newscore = new Number(200)
console.log(score)
console.log(newscore)
console.log(typeof(newscore.toString()))
console.log(score.toFixed(1)) // used to create precision of desired decimals

const otherNumber = 1233.2;
console.log(otherNumber.toPrecision(3)) // it returns the string with rounding of the significant numbers which we learned in class 11 

const hunreds = 100000000
console.log(hunreds.toLocaleString('en-IN')) // if do not pass en-IN then it returns the values in us standards



// ******************Maths
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(2.3))
console.log(Math.ceil(2.3))
console.log(Math.floor(2.3))
console.log(Math.min(2.3,4.5,1.5))
console.log(Math.max(2.3,4.5,6))
console.log(Math.random()) // gives the random no between 0 and 1
