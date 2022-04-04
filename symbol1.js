var a = Symbol()
var b =Symbol("a")
var obj = {name: "gopiya",[b]:"Gopiya Divya"}

//-->undefined
var x=Symbol.for("z")
console.log(obj[x])

//undefined
//var x=Symbol.keyFor(b)  
//console.log(x)

//--> Symbol(a)
//console.log(b.toString())

//--> a
// console.log(a.description)