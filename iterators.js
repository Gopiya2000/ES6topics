let arr = [1,2,3,4,5]
for(let val of arr){
    console.log(val)
}
let arr1 = [7,8,9,4,2]
let itr = arr1.values()
for(let val of arr1){
    console.log(val)
}
let set = new Set(["gopiya","apple",21])
for(let val of set)
console.log(val)
let map = new Map([["color","black"]])
map.set("name","gopiya")
map.set("age",21)
console.log(map)
for(let val of map)
console.log(val)
let arr2 = [9,8,7,6,5,4,3,2,1,10]
let it = arr2.values()
let nxt = it.next()
//returns value until true
while(!nxt.done){
    console.log(nxt.value)
    nxt = it.next();
}