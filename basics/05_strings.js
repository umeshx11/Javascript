const name = 'umesh'  //String Literal 
let repoCount = 10
// console.log(name + repoCount + "Value") it is outdated
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)   //string interpolation


let goodname = new String('umesh')  // String Object using new keyword
console.log(goodname) //[String: 'umesh']

let a = "hello";
let b = new String("hello");

console.log(a === b); // false ❌
console.log(a == b);  // true ✅ (because of type conversion)



// now it is defined as key value pair -> as it became a object


console.log(goodname[0])
console.log(goodname.__proto__)
console.log(goodname.length)
console.log(goodname.toUpperCase()) // does not change original string , copy is created
console.log(goodname)
console.log(goodname.charAt(2))
console.log(goodname.indexOf('e'))

const newName = goodname.substring(0,4) // it does not accept the negative values
console.log(newName)

const str1 = "The morning is upon us."; // The length of str1 is 23.
const str2 = str1.slice(1, 8);
const str3 = str1.slice(4, -2);

// Read the docs on mdn for string methods depth

const gameName = "    umesh   "
console.log(gameName)
console.log(gameName.trim())
//trimStart , trimEnd

const url = "https://umesh.com-//umesh%20g-ood"
console.log(url.replace("%20","-"))
// replaceAll 

console.log(url.includes("umesh"))
console.log(url.split("-"))


// using new keyword with string creates a object and while without it , it is primitive and when we use functions on primitive it temporary creates the object
