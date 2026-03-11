//object will store information

//1. object literals : {}

const user = {
    name: 'michael',
    age: 25,
    country: 'usa',
    occupation: 'Engineer'
};

console.log(user.name);

//2. constructor function
function Car(brand, model, price){
    this.brand = brand;
    this.model = model;
    this.price = price;
};
const c1 = new Car("bmw", "520d", 10000);
console.log(c1.brand);


//3. class style

class Customer{
    constructor(name, product){ // constructor variable
        this.name = name; // instance variable 
        this.product = product;
    }   
    addToCart(){
        console.log(`${this.product} added to the cart`);
    } 
}
//instance of the class
const c = new Customer('Nav', 'Apple');
console.log(c.name);
c.addToCart();

//4. Object.create(); with some prototype object
// let personProto = {};  //prototype object

const employeePrototype = {
    printInfo:function(){
        console.log(`hello, emp name is ${this.nme}`);
    }
};
const e1 = Object.create(employeePrototype);
e1.nme='Nav';
e1.printInfo();


//5. using factory function
//returns a obj 

function createDepartment(deptName, hod){
    return {
        deptName: deptName,
        hod: hod,
        getDeptInfo:function(){
            console.log(`hello, dept name is ${this.deptName} and hod is ${this.hod}`);
        }
    }
}

const dept1 = createDepartment("physics", "H C verma");
// console.log(dept1);
dept1.getDeptInfo();