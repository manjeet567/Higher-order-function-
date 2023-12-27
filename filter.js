let arr=[5,4,8,3,9,4,5,6,2,4]

let isOdd=function(n){
    return n%2===0
}
let greterfour=function(n){
    return n>4
}

let output=arr.filter(isOdd)
console.log(output)
console.log(arr.filter(greterfour))

const outputt=arr.filter((n)=>{
    return n<5
})
console.log(outputt)