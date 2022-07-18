// Explain Higher Order functions in javascript?
// a function which take a function as a argument and return

function num(func){
    return func();
}
num(function(){
    console.log("hello vivek");
})





// returning a function 
function higherOrder(){
    return function(){
        return "hello vivek!";
    }
}
var x= higherOrder();
console.log(x());




function higherorderfunc(high,firstname,lastname){
    return function high(firstname,lastname){
       console.log( `${firstname} ${lastname}`);
    };
}

 let funct=higherorderfunc(function(){console.log("hello vivek")},"vivek","gupta");
 console.log(funct());