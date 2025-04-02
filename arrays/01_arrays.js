lconst myArr = [1,2,3,4,true,"umesh"]
// arrays can store different datatypes
// arrays are resizable
// during copy of arrays it create shallow copy(same reference as the original), not deep copies(not same referance as original)
// in array as object there is prototype and inside it , there is another prototype

// Arrays Methods
myArr.push(1)
myArr.push(6)
myArr.pop()
myArr.unshift(9) // it is not good as it is not optimized as push (adds at start)
myArr.shift() // removes from the start

// console.log(myArr)
// console.log(myArr.indexOf(3))
// console.log(myArr.includes(9))

// const newArr = myArr.join()
// console.log(newArr)
// console.log(typeof newArr)

// slice and splice
console.log(myArr)
const newArray = myArr.slice(1,3)
console.log(newArray)
console.log("A ",myArr)
const newArra = myArr.splice(1,3) // it returns the deleted element from the array
console.log(newArra)
console.log("B ",myArr)
