add(7)
function add(num){
    return num+2;
}
addTwo(2) // this will throw error , it is the concept of hosting
const addTwo = function(num){
    return num+2;
}