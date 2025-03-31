let score = "33abc" 
console.log(typeof score)
let ValueInNo = Number(score) // In JS always first letter is capital while conversion
console.log(typeof(ValueInNo))
console.log(ValueInNo) //NaN

let score2 = null
console.log(typeof score2)
let ValueInNo2 = Number(score2) // In JS always first letter is capital while conversion
console.log(typeof(ValueInNo2))
console.log(ValueInNo2) //0


// "33abc"=> NaN
// null => 0
// true => 1  false => 0
// undefined => NaN

// ""=>false;
// "umesh"=>true


// ***********************************OPERATIONS****************

let value = 32
let negValue = -value
console.log(negValue*2)
console.log(2**3)
console.log(2/3)

// let str1 = "hello"
// let str2 = " Umesh"
// let str3 = str1+str2
// console.log(str3)

console.log(1+"2")
console.log("1"+2+2)
console.log(1+2+"2")

console.log(+true)
console.log(+"")

let num1,num2,num3
num1=num2=num3=2+2

console.log("2">1)
console.log("02">1)

console.log(null>0)
console.log(null==0)
console.log(null>=0)
//here reason is that an equality check == and comparision works differently
//Comparisons convert null to number,treating it as 0


console.log("2"==2)
console.log("2"===2)