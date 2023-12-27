let arr=[
    {firstName:"manjeet",lastName:"choudhary",age:22},
    {firstName:"kaushal",lastName:"jaat",age:18},
    {firstName:"gourav",lastName:"khardiya",age:15},
    {firstName:"pankaj",lastName:"jaangid",age:23}
]


//--------------list of fullName-------------//

const output=arr.map((x)=>{
    return x.firstName +" "+ x.lastName
})
console.log(output)


//-------------------------------------------------//


let ageoutput=arr.reduce(function(acc,curr){
if(acc[curr.age]){
acc[curr.age]= ++acc[curr.age]
}else{
    acc[curr.age]=1
}
return acc
},{})
console.log(ageoutput)


//-------------------------------------------------//

const filter=arr.filter((x)=>
    x.age<20
).map((x)=> x.firstName)
console.log(filter)


//--------------------//

const outPut=arr.filter((x)=>x.age<20).reduce(function(acc,curr){
acc.push(curr.firstName)
return acc;
},[])

console.log('ffff',outPut)