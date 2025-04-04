// Immediately Invoked function expressions (IIFE)

(function chai(){
    console.log("database connected")
})(); // this is to show them that here we have to stop // Named IIFE

((name)=>{
    console.log(`database connected ${name}`)
})('umesh') // Unnamed IIFE