let user={
    name:"Archana",
    age:40,
    isEmp:true,
    hobbies:['Reading','Playing','Coding'],
    display()
    {
        console.log("name: ",this.name);
        console.log(`age: ${this.age}`);
    }
}
user.display();
console.log(this.name)
console.log(user.hobbies[1])
//Array in javascript
let fruits=['banana','mango','pear',123];
console.log(fruits[2]);
fruits.push('apple','pinaple');
//console.log(fruits)
fruits.pop();
console.log(fruits)
for(let i=0;i<fruits.length;i++)
{
    console.log(fruits[i])
}
fruits.sort();
console.log(fruits)
//date datatype
const d=new Date();
console.log(d);
let now=new Date();
console.log(now.getFullYear());
console.log(now.getMonth(),now.getDate());
let d1=new Date(now.getTime()+7*24*60*60*1000);
console.log(d1)
