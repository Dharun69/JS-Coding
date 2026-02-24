//Strings
const myVariable = "Mathematics";

// The length property
console.log(myVariable.length);

//Strings methods

//ascessing characters
console.log(myVariable.charAt(0)); //M
console.log(myVariable.charCodeAt(0)); //77

// searching characters
console.log(myVariable.indexOf("a")); //1
console.log(myVariable.lastIndexOf("a")); //6

console.log(myVariable.slice(0, 3)); // Mat
console.log(myVariable.toUpperCase());
console.log(myVariable.toLowerCase());
console.log(myVariable.includes("tic")); //returns a boolean
console.log(myVariable.split("")); // returns the multiple strings within a array



let str1 = "hi how are you";
let str2 = "da";

console.log(str1.concat(str2));

/*
partitioning string
substring(start, end);
slice(start, end);
substr(start, end);
*/

// first includes and last index excludes
// we can give - as well its starts from -1 at last.
console.log(str1.slice(3, 10));

console.log(str1.substring(3, 10));

// console.log(str1.substr(3,10)); // deprecated

console.log(str1.replace("how", "who"));

let str = "rs7";
console.log(str.padEnd(5, 0));