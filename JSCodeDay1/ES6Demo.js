let globalvar=10
if(true)
{
    let localvar=20
    console.log(globalvar)
    console.log(localvar)
}
console.log(globalvar)
//console.log(localvar)

const a=60
const num=[1,2,3]
num[1]=4
console.log(num)

let person={name:'Archana',age:40}
person.name='Bob'

//console.log(updatedperson)
const arr=[1,2,3]
arr.push(4,5,6)
console.log(arr)
//template literal
const name="Roy";
const id=102;
const msg=`Employee name is ${name} and his ID is ${id*7}`;
console.log(msg)

function add(x,y)
{
    return x+y;
}

const addrow=(x,y)=>x+y;
console.log(addrow(23,2))

const square=(x)=>x*x;
console.log(square(23))
//destructure objects, and arrays
const fruits=['apple','banana','cherry'];
const[a1,b,c,d]=fruits
console.log(a1,b,c,d)

let person1={
    name1:'Bob',
    age:23
}
const{name1,age}=person1
console.log(name1)

const n1=[2,4,6]
const ans=n1.map(x=>x*x)
console.log(ans)

const users=[
    {name:"ram",age:23},
    {name:"Roy",age:12},
    {name:"bob",age:45}
];

const names=users.map(user=>user.name);
console.log(names);

const names1=users.filter(user=>user.age<=20).map(user=>user.name);
console.log(names1)
const numbers=[1,2,3,4,5,6,7,8,9,10]

const isodd=numbers.filter(num=>num%2!==0)
console.log(isodd)

const iseven=numbers.filter(num=>num%2===0)
console.log(iseven)

const a2=[2,4,6,7,8,9]
const final=[...a2,23,34]
console.log(final)

const updatedperson={...person,age:56}
console.log(updatedperson)
//rest parameter
function sum(...numbers)
{
    return numbers.reduce((total,num)=>total+num,0);
}
console.log(sum(2,3,4,1,2,3,4));
console.log(sum(2,3,4,1,2,3,4,888,67,788));

const person2={name2:'Alice',age:25,city:'Singapore'};
const{name2,...rest}=person2
console.log(name2,rest)
//const a2=[2,4,6,7,8,9]
const[first,second,...rest1]=a2;
console.log(first,second,rest1);
