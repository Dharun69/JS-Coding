// parent (super class)

class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getInfo(){
        return ` ${this.make}, ${this.model}, ${this.year}`;
      }

      startEngine(){
        console.log('starting engine' + this.make);
      }
      stopEngine(){
        console.log('stopping engine');
      }
}

//child(sub class)

class Car extends Vehicle {

    constructor(make, model, year, fuelType){
       super(make, model, year); //call the parent class constructor
       this.fuelType =fuelType;
    }
     
    driverCar(){
        console.log('driving the car ' + this.model);
    }
}
class Truck extends Vehicle {

    constructor(make, model, year, loadingCapacity){
       super(make, model, year); //call the parent class constructor
       this.loadingCapacity =loadingCapacity;
    }
     
    driverTrack(){
        console.log('driving the car' + this.model + 'capacity' + this.loadingCapacity);
    }
}

//creating the objects (instances): new keyword
const car = new Car('Honda', 'civiv',2023, 'petrol');
const truck = new Truck('tata', 'sumo', 2023, 100);
(car.driverCar());
(car.startEngine())
const getInfo = car.getInfo();
console.log(getInfo);
truck.startEngine();






