//To create property name dynamically we can use symbols.
var a =Symbol()
var b =Symbol("a")
var obj={};
var arr=[122,411,52,41,32,55,52]
for(const i of arr){
    //object doesn't allow property name repeated
    //obj[i]=i;
    obj[Symbol()]=i;
}
console.log(obj)
