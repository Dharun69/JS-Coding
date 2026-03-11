class Car {
    static wheels = 4; 
    constructor(name, model, price){
        this.name = name;
        this.model = model;
        this.price = price; //current class object
        this.wheels = 50;
    }


    startEngine(){
        console.log('start engine for car');
    }
}

class Audi extends Car{
    //overridden method
    startEngine(){
        console.log('start engine for audi')
    }
}

const audi = new Audi();
audi.startEngine();

const car = new Car();
car.startEngine();

//possible to parent to child method over ridding

