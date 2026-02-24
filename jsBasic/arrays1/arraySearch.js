
// The indexOf() method searches an array for an element value and returns its position.

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;
console.log(position);


// Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the 
// last occurrence of the specified element.

let pos = fruits.lastIndexOf("Apple") + 1;
console.log(pos);


// ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).
let check = fruits.includes("Mango"); // is true
console.log(check);


// The find() method returns the value of the first array element that passes a test function.
// This example finds (returns the value of) the first element that is larger than 18:

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);
console.log(first);
function myFunction(value) {
    return value > 18;
  }


  // The findIndex() method returns the index of the first array element that passes a test function.
  let f = numbers.findIndex(myFunction);
  console.log(f);