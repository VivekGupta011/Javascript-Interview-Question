// what is an immediately invoked function in javascript?
//IIFE(IIFY) is a function that runs as soon as it is defined


// regular function
 function func(){
    console.log("hello vivek");
    // creating function using Parentheses
// Syntax of IIFE
(function (){
    //do something
    console.log("hello vivek1");
}) (); 
}
func();




// getting time
(function(dt){
    console.log(dt.toLocaleTimeString());
})(new Date);


// Use Cases of IIFE
// Avoid polluting the global namespace
// to create closures
// it is used to execute async and await function