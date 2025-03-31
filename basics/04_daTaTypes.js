// Primitive

// 7 types : boolean,null,undefined,number,symbol,string,BigInt

// Reference type(non - primitive)
// Array , Objects , Functions

// Javascript is dynamic type language as it can store different types of values in variable during runtime

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId)


const array = ["thor","marvel","luffy"] // object
const object = {
    "one piece" : "luffy",
    "demon slayer" : "tanjiro"
}
const myFunction = function(){
    console.log("hello everyone")
} // function object

console.log(typeof umesh) // even if variable is not initialized


// **********Memory allocation
// Stack(Primitive)    Heap(Non Primitive)
let namee = "umesh"
let anotherName = namee
anotherName = "shailesh"
console.log(anotherName)
// first object copy is created and then assigned to anotherName variable

let obj={
    age : 18,
    name : "umesh",
}
let secondObj = obj
secondObj.age=15
console.log(obj)
// reference is passed here
