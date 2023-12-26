const a=[7,8,4,5,7,8,0]

let threedigit=function(n){
    return Math.floor(Math.random()*100)*n
}
let fourdigit=function(n){
    return Math.floor(Math.random()*1000)*n
}

const calculate=function(a,logic){
    let output=[];
  for(let i=0;i<a.length;i++){
    output.push(logic(a[i]))
  }
  return output;
}
console.log(calculate(a,threedigit))
console.log(calculate(a,fourdigit))
console.log(a.map(threedigit))