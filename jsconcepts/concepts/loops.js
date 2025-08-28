
// The JavaScript for in statement loops through the properties of an Object:

const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
}
console.log(text);


// The JavaScript for in statement can also loop over the properties of an Array:

const numbers = [23,34,65,34,67];

let txt = "";
for(let x in numbers){
    txt += numbers[x];
}
console.log(txt);

// for of
const cars = ["BMW", "Volvo", "Mini"];

let tx = "";
for (let x of cars) {
//   tx += x;
console.log(x)
}
// console.log(tx);





//for loop

for(let i=1; i<11; i++){
   // console.log(i);
    if(i%2==0)
    console.log(i)
}

//while

let i = 1;
while(i<=10){
    console.log(i);
    i++;
}

// do -while
let p = 1;
do{
    console.log(p);
    p++;
}
while(p<=0);


//for - in 
//used for fetch the value from objects

const persons = {
    name: 'dharun',
    age : 25
};

for(let key in persons)  //every iteration key represents the value 
console.log(key, persons[key]);

for(let i in persons)
console.log(persons[i]);

//Array

const colors = ['red', 'blue', 'green']
//for in - loop
for(let index in colors){
console.log(index);
console.log(index, colors[index]);

}

// for -of 
// is used to get the values from array

for(let col of colors)
console.log(col);

//break and continue:

let k = 0;
while(k<=10){
    if(k === 5)
    break;
    console.log(k);
    k++;
}