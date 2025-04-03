function addTwoNumbers(number1,number2){ // Parameters
    console.log(number1+number2)
}
addTwoNumbers( 2,"a") // Arguments
function loginUserName(username="sam"){
    if(!username){
        console.log("Please enter a userName")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserName());


function CalculateCartPrice(val1,val2,...num){ // deseparator operator
    return num;
}
CalculateCartPrice(2,3,4,5,6,7)

function handleObject(anyObject){
    console.log(`this is the name of ${anyObject.username}`)
}
function handleArray(getArray){
    return getArray[0];
}