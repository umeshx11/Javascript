const coding = ["js","ruby","java","python","cpp"]
// it is a high order function
// coding.forEach( function (val) {
//     console.log(val)
// })

// coding.forEach( (value) =>{
//     console.log(value)
// }
//) // this is called callback

function printMe(item){
    console.log(item)
}

coding.forEach(printMe) // give reference here , do not print here
// not just forEach has the access of each elements , it has access of item , index and array
coding.forEach( (item, idx, arr) =>{
    console.log(item,idx,arr)
})

const myCoding = [{ lang : "js" }]
// array of objects 
// iteration of over it

const values = myCoding.forEach((item)=>{
    // console.log(item.lang)
    return item
})

console.log(values) // undefined
// You're seeing undefined because Array.prototype.forEach() does not return a value — it always returns undefined