// map  -- used to transformation of array
const arr = [5, 1, 3, 2, 6];

// double

function double(num) {
    return num * 2;
}
// triple
function triple(num) {
    return num * 3;
}

// binary
function binary(num) {
    return num.toString(2);
}

const output = arr.map(double);
console.log(output); // [ 10, 2, 6, 4, 12 ]

const output1 = arr.map((x) => {
    return x * 2;
});
console.log(output1);

// filter

// filter odd values

function isOdd(num) {
    return num % 2;
}

const output2 = arr.filter(isOdd);
console.log(output2);

const output3 = arr.filter((num) => num % 2 === 0);
console.log(output3);

// reduce

// find sum
function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
console.log(findSum(arr));

const output4 = arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);
console.log(output4);

// find max inside array

const arr1 = [5, 6, 7, 8, 9, 2];
function findMax(arr1) {
    let max = 0;
    for (let i = 0; i <= arr1.length; i++) {
        if (arr1[i] > max) {
            max = arr1[i];
        }
    }
    return max;
}

console.log(findMax(arr1));

const output5 = arr1.reduce(function (max, curr) {
    if (curr > max) {
        max = curr;
    }
    return max;
}, 0);
console.log(output5);
