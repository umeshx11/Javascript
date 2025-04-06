const arr = [1,2,3,4,5]
const values = arr.filter((num) => num>4) // implicit return  // it returns array
const values1 = arr.filter((num)=>{
    num>4 // not same as before as here we to return expicitely 
})
console.log(values)

// Filter map 
const myNums = [2,3,4,5,6,1,2]
const newNums = myNums.map( (num) => (num+10))
const newNumbers = myNums.map((num)=>num*10)
                        .map((num)=>num+1)
                        .filter((num)=>num>=40)
console.log(newNumbers);

