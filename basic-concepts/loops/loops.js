//for loop

for (let i = 1; i < 11; i++) {
    // console.log(i);
    if (i % 2 == 0) console.log(i);
}

//while

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// do -while
let p = 1;
do {
    console.log(p);
    p++;
} while (p <= 0);

//for - in
//used for fetch the value from objects

const persons = {
    name: "dharun",
    age: 25,
};

for (let key in persons) //every iteration key represents the value
    console.log(key, persons[key]);

for (let i in persons) console.log(persons[i]);

//Array

const colors = ["red", "blue", "green"];
//for in - loop
for (let index in colors) {
    console.log(index);
    console.log(index, colors[index]);
}

// for -of
// is used to get the values from array

for (let col of colors) console.log(col);

//break and continue:

let k = 0;
while (k <= 10) {
    if (k === 5) break;
    console.log(k);
    k++;
}
