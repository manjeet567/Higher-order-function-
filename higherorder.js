// function x(){
//     console.log('manjeet')
// }
// function y(x){
// x()
// }
// y(x)
//-----aisa function jiske argument me hum function pass kre or return bhi function kre --------//
const redius=[3,1,4,5];

const area=function(redius){
    return Math.PI * redius *redius
}
const circumference=function(redius){
    return 2 * Math.PI * redius
}
const diameter=function(redius){
    return 2 * redius
}

const calculate=function(redius,logic){
    const output=[];
    for(let i=0;i<redius.length;i++){
        output.push(logic(redius[i]))
    };
    return output;
}
Array.prototype.calculatee=function(logic){
    const output=[];
    for(let i=0;i<this.length;i++){
        output.push(logic(this[i]))
    };
    return output;
}
console.log(redius.calculatee(area))
console.log(calculate(redius,area))
console.log(calculate(redius,circumference))
console.log(calculate(redius,diameter))
console.log(redius.map(area))