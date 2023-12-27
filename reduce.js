let arr = [5, 7, 8, 6, 4, 9, 5, 3, 6, 7, 4, 1, 2];



//----------------------------sum -------------------------//
function findsum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum
}
console.log('sum:', findsum(arr))

const output = arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
}, 0)
//acc==acumuletor
//curr=current value
console.log('output:', output)



//----------------------------max value--------------------//
function maxvalue(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}
console.log('max:', maxvalue(arr))

const maxoutput=arr.reduce(function(acc,curr){
    if(curr>acc){
        acc=curr
    }
    return acc
},0)
console.log('maxoutput:', maxoutput)