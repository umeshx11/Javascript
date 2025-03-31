const date = new Date();
console.log(date)
console.log(date.toString())
console.log(date.toDateString())
console.log(date.toISOString())
console.log(date.toLocaleDateString())
console.log(date.toLocaleString())
// 2025-03-31T10:16:16.772Z
// Mon Mar 31 2025 15:46:16 GMT+0530 (India Standard Time)
// Mon Mar 31 2025
// 2025-03-31T10:16:16.772Z
// 3/31/2025
// 3/31/2025, 3:46:16 PM
// outputs of above
console.log(typeof date) // object

// let mycreatedDate = new Date(2025, 0 ,20)
// let mycreatedDate = new Date(2025, 0 ,20,5,3)
// let mycreatedDate = new Date("2025-01-14")
let mycreatedDate = new Date("01-14-2025")
//console.log(mycreatedDate.toDateString())
console.log(mycreatedDate.toLocaleString())

// *******timestamps
let timestamp = Date.now()
console.log(timestamp)
console.log(mycreatedDate.getTime())

// learn date and time in detail from mdn docs