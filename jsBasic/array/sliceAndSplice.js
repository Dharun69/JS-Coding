
// 🔹 1. slice() — Non-destructive (does NOT change original array)


let fruits = ["apple", "banana", "cherry", "date", "fig"];

console.log(fruits.slice(1, 4));
// Output: ['banana', 'cherry', 'date']
// Slices from index 1 to 3 (end is excluded)

console.log(fruits.slice(2));
// Output: ['cherry', 'date', 'fig']
// Slices from index 2 to end

console.log(fruits.slice(-2));
// Output: ['date', 'fig']
// Slices from the 2nd last to the end

console.log(fruits);
// Output: ['apple', 'banana', 'cherry', 'date', 'fig']
// Original array is not changed

// 🔹 2. splice() — Destructive (modifies original array)


//a. Remove elements
let colors = ['red', 'green', 'blue', 'yellow'];
colors.splice(1, 2); // remove 2 items from index 1
console.log(colors); 
// Output: ['red', 'yellow']


//b. Add elements
let nums = [1, 2, 5];
nums.splice(2, 0, 3, 4); // at index 2, remove 0, insert 3 and 4
console.log(nums); 
// Output: [1, 2, 3, 4, 5]


//c. Replace elements
let tools = ['hammer', 'wrench', 'screwdriver'];
tools.splice(1, 1, 'drill'); // replace 1 item at index 1
console.log(tools); 
// Output: ['hammer', 'drill', 'screwdriver']
