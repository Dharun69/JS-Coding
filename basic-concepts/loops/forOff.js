//Array

const colors = ["red", "blue", "green"];
//for in - loop
for (let index in colors) {
    // console.log(index);
    console.log(index, colors[index]);
}

// for -of
// is used to get the values from array

for (let col of colors) console.log(col);

const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
    text += x;
}
console.log(text);
