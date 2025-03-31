const marvel_heroes = ["spiderman","thor","ironman"]
const dc_heroes = ["flash","batman","superman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);


// Concat operator
// const total_heroes = marvel_heroes.concat(dc_heroes) // it returns a new array
// console.log(total_heroes);


// Spread operator
const all_heroes = [...marvel_heroes,...dc_heroes]
console.log(all_heroes);

const another_array = [1,2,3,[3,4,5],[2,[3,4]]]
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array)

console.log(Array.isArray("Umesh"))
console.log(Array.from("Umesh"))
console.log(Array.from({name : "Umesh"})) // interesting as here we have to mention whether interms of keys or value , it will return empty array

let score1 = 100
let score2 = 200
let name = "Umesh"
console.log(Array.of(score1,score2,name))