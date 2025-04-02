// how can we do the object as a singleton
const tinderUser = new Object(); // this is singleton object
const obj = {} // this is a literal

tinderUser.userName = "umesh"
tinderUser.companyName = "One Piece"
// console.log(tinderUser) 

const regularUser = {
    email : "umesh50467021@gmail.com",
    fullName : {
        userfullName : {
            firstName : "umesh",
            lastName : ""
        }
    }

}
console.log(regularUser.fullName.userfullName);

const obj1 = {
    a : 2,
    b : 3
}
const obj2 = {
    a : 2,
    b : 4
}
const obj3 = {obj1,obj2}
console.log(obj3); // this is the same problem that we encountered in arrays
const obj4 = Object.assign({},obj1,obj2) // it considers empty string as a target and obj1,obj2 as a source
console.log(obj4)
// JavaScript objects cannot have duplicate keys.

// When Object.assign() copies properties, if a key already exists, it gets overwritten.

const obj5 = {...obj1,...obj2} // using the separator operator in creating the objects
console.log(obj5)