//general function
var hello=function(){
    return "Helllooo";
}
console.log(hello());
//arrow function
var hello=()=>{
    return "Helllooo";
}
console.log(hello());
//when we have only one statement
var hello=()=>"Helllooo";
console.log(hello());
//can extend a statement 
var hello=(vall)=>"Helllooo"+vall;
console.log(hello(" Woorrllldddd"));
//can use one or more
var hello=(val1,val2)=>"Helllooo"+val1+val2;
console.log(hello(" Woorrllldddd"," ohooo!"));


