const name = 'umesh'
let repoCount = 10
// console.log(name + repoCount + "Value") it is outdated
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
let goodname = new String('umesh')
// now it is defined as key value pair
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