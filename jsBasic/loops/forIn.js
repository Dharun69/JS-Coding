//for - in
//used for fetch the value from objects

const persons = {
    name: "dharun",
    age: 25,
};

// for(let key in persons)  //every iteration key represents the value
// console.log(key, persons[key]);

// for(let i in persons)
// console.log(persons[i]);

for (let k in persons) {
    console.log(k, persons[k]);
}

const arr = [1, 3, 4, 5, 6];

for (let a in arr) {
    console.log(arr[a]);
}

const person = { fname: "John", lname: "Doe", age: 25 };

let text = "";
for (let x in person) {
    text += person[x];
}
console.log(text);


