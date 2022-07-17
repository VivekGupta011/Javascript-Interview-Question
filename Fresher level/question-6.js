// Difference between var and let keyword 


// we only apply redecalare and update their values
// we cannot apply hoasting concept
let num1=71;
 num1=72;
console.log(num1);

// we only update their value but don't redeclare values
// we apply hoasting concept 
var num=10;
num=7;
console.log(num);

for(var num=0;num<5;num++){
    console.log(num);
}
console.log(num);