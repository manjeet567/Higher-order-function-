let arr=[2,5,3,6,4]

let duble=function(n){
    return n*2
}
let triple=function(n){
    return n*3
}
let binary=function(n){
    return n.toString(2)
}

console.log(arr.map(duble))
console.log(arr.map(triple))
console.log(arr.map(binary))