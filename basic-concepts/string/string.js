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


