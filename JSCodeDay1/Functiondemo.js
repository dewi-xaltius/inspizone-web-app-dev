function greet(name)
{
    console.log('Hello ' + name + '!');
}

function add(a,b)
{
    let sum=a+b;
    let square=a*b;
    return [sum,square];
}
greet("Bob");
const [sum1,s]= add(89,23)
console.log("Sum",sum1);
console.log("Square",s);

let age=34;
if(age>18)
{
    console.log("Eligible for vote")

}
else{
    console.log("You are minor")
}
//monday:7AM, Tues, wed,Thur:4AM, Friday:9 AM, Sat, Sun:8AM
let day="Mondayafssa"
switch(day)
{
    case 'Monday':
        console.log("7AM");
        break;
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
        console.log("4AM");
        break;
    case 'Friday':
        console.log("8AM");
        break;
    case 'Saturday':
    case 'Sunday':
        console.log("9AM");
        break;
    default:
        console.log("Sleep")
}
for(let i=0;i<=10;i++)
{
    if(i===5)
    {
        console.log("skipping the loop");
        continue;
    }
    console.log(i)
}