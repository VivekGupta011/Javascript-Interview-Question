// <!-- Explain Hoasting in javascript -->
// <!-- Hoisting is the default behaviour of javscript where all the variable and function declarations are moved on top -->



"use strict";
hoisting=9;   //variable declaration
var hoisting;  //initialized variable
console.log(hoisting); //calling variable

"use strict";
x=23;
console.log(x)
var x;

func();
function func(){
    console.log("this is function calling!");

}

