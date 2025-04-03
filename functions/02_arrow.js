console.log(this) // in node environment it is empty object
// function chai(){
//     let userName = "umesh"
//     console.log(this)
//     console.log(this.userName)
// }
// chai()

// function declaration through arrow
const chai = () => {
    let userName = "umesh"
        console.log(this) // we can not use this in arrow function
}
chai()

const addTwo = (num1,num2) => {
    return num1+num2; // explicit return 
}
const anotherTwo = (num1,num2) =>( num1 + num2); // implicit return

const object = (num1,num2) => ({userName : "umesh"}) // we have to use parenthesis , otherwise it will return undefined
console.log(object(2,3))