class Car{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
    display(){
        return `Name = ${this.name} Year = ${this.year}` ;
    }
    age(currentyear){
        return currentyear.getFullYear()- this.year;
    }
}
let currentyear = new Date();
const obj1=new Car("Ford",2004);
const obj2=new Car("Audi",2014);
console.log(`${obj1.display()} Age=${obj1.age(currentyear)}`);
console.log(`${obj2.display()} Age=${obj2.age(currentyear)}`);