//acts like a loop method.each values displays in a new line
const num=[7,4,5,6,4,9];
num.forEach(a=> console.log(a));
//i-index number,a-values
const cat=[7,4,5,6,4,9];
num.forEach((a,i)=> console.log(i+" "+a));
//map-to modify array elements,applies for each element in a array.
const cat1=[7,4,5,6,4,9];
num.map(a=> console.log("NUM "+a));
//filter-to filter the array elements.
const num1=[7,4,5,6,4,9];
const n=num.filter(a=>{
   return(a>4);
});
console.log(n);
//find-displays output according to the condition we have given
//displays first value for the given condition
const num2=[7,4,5,6,4,9];
var a=num.find(f);
function f(value,index,array){
    return value>2;
}
console.log(a);
//findIndex
//same with above but dislays index number 
const num3=[7,4,5,6,4,9];
var a=num.findIndex(f);
function f(value,index,array){
    return value>2;
}
console.log(a);