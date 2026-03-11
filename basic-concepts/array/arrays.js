// Arrays

const myArrays = [];

// add element in the array
myArrays[0] = "dh";
myArrays[1] = "23";
myArrays[2] = "2342";
console.log(myArrays);

// get the last element in the array
console.log(myArrays[myArrays.length - 1]);

//Inserts new elements at the start of an array, and returns the new length of the array.
console.log(myArrays.unshift("3"));

// Appends new elements to the end of an array, and returns the new length of the array.
myArrays.push("jack");

console.log(myArrays);

// Removes the last element from an array and returns it.
//If the array is empty, undefined is returned and the array is not modified.
const lastItem = myArrays.pop();
console.log(lastItem);

// Removes the first element from an array and returns it.
// If the array is empty, undefined is returned and the array is not modified.
console.log(myArrays.shift());

console.log(myArrays);

// remove the element at the middle of the array
delete myArrays[1]; // delete will make an array undefined [ 'dh', <1 empty item>, '2342' ]
console.log(myArrays);

// Removes elements from an array and, if necessary, inserts new elements in their place,
// returning the deleted elements.
// we can also use the splice method to replace the value or several value
// myArrays.splice(1, 1);
myArrays.splice(1, 1, 23);

console.log(myArrays);
console.log(myArrays[1]);

const mulArr = ["a", "b", "c", "d", "e"];
const newArr = mulArr.slice(2, 3);
console.log(newArr);

console.log(mulArr.reverse());

const myString = mulArr.join();
console.log(myString);

const myArr1 = [23, 23, 24];
const myArr2 = [234, 546, 234];
console.log(myArr1.concat(myArr2));
const newArray = [...myArr1, ...myArr2]; // spread operator
console.log(newArray);

