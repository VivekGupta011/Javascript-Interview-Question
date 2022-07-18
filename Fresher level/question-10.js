// Explain "this" Keyword.
// The "this" 


function dosomething(){
    console.log(this);
}
dosomething();



var result={
    name:"vivek",
    id:123,
    about:function(){
        console.log(`${this.name} and your college id is ${this.id}`)
    }
}
var about= result.about();

var result2={name:"akash",id:133,about};
result2.about();