class Student
{
    constructor(name, age, address)
    {
        this.name=name;
        this.age=age;
        this.address=address;
    }
    greet()
    {
        console.log(`Hello, ${this.name}. Your age is ${this.age} and address is ${this.address}`)
    }
} 

const s1=new Student('Alice',34,'Singapore')
s1.greet();