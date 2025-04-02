// singleton -> if made by constructor not by literal
// object.create

let mysym = Symbol("key1")
let mysym1 = Symbol("key2")

// object literals
const user = {
    name : "umesh",
    "full name" :" wxwx",
    mysym : "good",
    [mysym1] : "good", // this is the correct syntax for declaring as symbol
    age : 18,
    location : "Jaipur",
    email : "good.com"
}

// console.log(user.email)
// console.log(user["email"])
// // console.log(user."full name") this is a wrong syntax
// console.log(typeof user.mysym) // but this is not acting as symbol
// console.log(typeof user[mysym1]) // this is the correct syntax for accessing the symbol

// Object.freeze(user) // now further modification , if applied then also it does not change before object
// console.log(user)

user.greeting = function(){
    console.log("hello js user")
}

user.greeting2 = function(){
    console.log(`Good morning, ${user.name}`) // or we can use this.name
}
console.log(user.greeting) //It does not execute the function. Instead, it returns the function definition itself.
console.log(user.greeting2());
// First line comes from the function itself (console.log inside greeting2).

// Second line is undefined, because console.log(user.greeting2()) tries to print the return value of user.greeting2(), which is undefined.


user.username = "gojo" // Like this we can declare variables of object outside
console.log(user.username);
