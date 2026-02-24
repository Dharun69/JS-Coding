// array methods - map, filter, and reduce
// map - executes callback for each array element and returns new array

// when to use if we want to change the values in the array

let priceUSD = [20, 35, 13];

let priceINR = priceUSD.map((x) => {
    return x * 83;
});
console.log(priceINR);

const input = [
    // array of objects
    { name: "john", age: 32 },
    { name: "sai", age: 65 },
    { name: "ghost", age: 34 },
    { name: "doc", age: 44 },
    { name: "tob", age: 43 },
];

const ages = input.map((x) => x.age);
console.log(ages);

// filter - returns new array by checking each value of original arr using call back fn

let num = [23, 35, 76, 23, 21];

let lessthan50 = num.filter((x) => x < 50);
console.log(lessthan50);

//reduce - executes reducer callback and returns accumlated result

let n = [23, 35, 76, 23, 21];
let cartTotal = n.reduce((total, el) => total + el);
console.log(cartTotal);

let arr2d = [
    ["a", "b", "c"],
    ["c", "d", "f"],
    ["d", "f", "g"],
];

// output: { a: 1, b: 1, c: 2, d: 2, f: 2, g: 1 }

let count = arr2d.flat().reduce((accumulator, currVal) => {
    if (accumulator[currVal]) {
        accumulator[currVal]++;
    } else {
        accumulator[currVal] = 1;
    }
    return accumulator;
}, {});

console.log(count);
