// declration of array

let myArray = []; // empty array

// 1. push() -> appends new elements / adds 1 or more elements to the end of an existing array and returns the new length of the array

let lang = ["Python", "Javascript", "Java"];
lang.push("TS");
console.log(lang);

// 2. pop() -> removes and returns the last item from the end of the array

let numbers = [1,2,3,4,5]; // an array with numbers
numbers.pop();
console.log(numbers);

// 3. shift() -> removes the first element from the array and returns that same element

let fruits = ["avacado", "watermelon", "orange"]; // an array with strings
let firstFruit = fruits.shift();
console.log(firstFruit);
console.log(fruits); // removes first element and gives output

// 4. unshift() -> adds 1 or more elements to the beginning of the array and returns the new length of the array

let colors = ['blue', 'pink', 'black'];
colors.unshift('white', 'green');
console.log(colors);
console.log(colors.length);

// 5. splice() -> it allows you to add / remove elements from the specific index in the array OR
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

// @param start — The zero-based location in the array from which to start removing elements.
// @param deleteCount — The number of elements to remove.
// @returns — An array containing the elements that were deleted.

let animals = ['dog', 'birds', 'cat'];
animals.splice(1,1,'cow', 'elephant');
console.log(animals);

// 6. slice() -> returns a new array containing element from the original array based on the specified start and index. End index will not be included.
// The beginning index of the specified portion of the array. 
// // If start is undefined, then the slice begins at index 0.

// @param start
// The beginning index of the specified portion of the array. 
// If start is undefined, then the slice begins at index 0.

let no = [17, 28, 33, 45, 59];
let newPop = no.slice(1,4); // include the first index and exclide the last index
console.log(newPop);

// 7. concat() -> combines 2 or more arrays and create a new array

let fr = ["apple", "watermelon", "mosambi"];
let num = [1,2,3,4];
let mixedArray = fr.concat(num);
console.log(mixedArray);

// 8. indexOf() -> Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

let car = ["honda", "audi", "bmw", "bmw"];
let indexCar = car.indexOf("bmw");
console.log(indexCar);

// this element is not present in the array so it gives -1
let indexCar1 = car.indexOf("rp");
console.log(indexCar1);

// count the 2nd index of the repeated array
let index2 = car.indexOf("bmw", car.indexOf("bmw") + 1);
console.log(index2);

// 9. includes() -> Determines whether an array includes a certain element, returning true or false as appropriate.

// @param searchElement — The element to search for.
// @param fromIndex — The position in this array at which to begin searching for searchElement.

let test = ["admin", "customer", "seller", "vendor"];
let flag = test.includes("seller", "admin");
console.log(flag);

// 10. forEach() -> A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
// Performs the specified action for each element in an array.

let n = [1,2,3,4,5,6,7];

n.forEach((e) => {
    console.log(e * 3);
});





// Arrays

const myArrays = [];

// add element in the array
myArrays[0] = "dh";
myArrays[1] = "23";
myArrays[2] = "2342";
console.log(myArrays);


// get the last element in the array
console.log(myArrays[myArrays.length - 1])


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
console.log(myArrays.shift())

console.log(myArrays)

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



const mulArr = ['a', 'b', 'c', 'd', 'e'];
const newArr = mulArr.slice(2,3);
console.log(newArr);

console.log(mulArr.reverse());

const myString = mulArr.join();
console.log(myString);

const myArr1 = [23,23,24];
const myArr2 = [234,546,234];
console.log(myArr1.concat(myArr2));
const newArray = [...myArr1, ...myArr2]; // spread operator
console.log(newArray);
