// Loops mentioned are more array specific

// for of 
// for (const iterator of object) { //iterator can be of object , array , and string 
    
// }
const arr = [1,2,3,4,5]
for (const element of arr) {
    console.log(element);
}

const greetings = "hello world"
for (const element of greetings) {
    console.log(element);
}

// Maps => there output comes in sequence, not random like object insertion output -> as they come randomly , with unique values
const map = new Map()
map.set('IN','India')
map.set('USA',"United states of America")
console.log(map)

for (const [key,value] of map) {
    console.log(key, ":-",value);
}

// for in loop
const goodObject = {
    OnePiece : "luffy",
    author : "umesh"
}
for (const key in goodObject) { // objects
    console.log(key , "-> ", goodObject[key]);
    
}

for (const elements in arr) { // array
    console.log(arr[elements])
}

for (const elements in map) {
    
}