const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);

// The join() method also joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator:
console.log("----join---");
console.log(fruits.join("*"));

// The pop() method removes the last element from an array:
console.log("----pop---");
let fruit = fruits.pop();
console.log(fruits);

// The push() method adds a new element to an array (at the end):
console.log("----push---");
fruits.push("Mango");
console.log(fruits);

// The shift() method removes the first array element and "shifts" all other elements to a lower index.
console.log("----shift---");
fruits.shift();
console.log(fruits);

// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
console.log("----unshift---");
fruits.unshift("Lemon");
console.log(fruits);

fruits[0] = "Kiwi";
console.log(fruits);

// The length property provides an easy way to append a new element to an array:
console.log("----using length property to append---");
fruits[fruits.length] = "butter";
console.log(fruits);

// Using delete() leaves undefined holes in the array.
// Use pop() or shift() instead.

// merging arrays
// The concat() method does not change the existing arrays. It always returns a new array.
// The concat() method can take any number of array arguments.
console.log("----merging arrays---");
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

// Example (Merging Three Arrays)
console.log("----merging three arrays---");

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChilds = arr1.concat(arr2, arr3);
console.log(myChilds);

// The concat() method can also take strings as arguments:
console.log("----contact using strings---");
const arr = ["Emil", "Tobias", "Linus"];
const myChild = arr.concat("Peter");
console.log(myChild);

// The copyWithin() method copies array elements to another position in an array:
console.log("----using copywithing---");
const fruitss = ["Banana", "Orange", "Apple", "Mango"];
// Copy to index 2, all elements from index 0:
const f = fruitss.copyWithin(2, 0);
console.log(f);

// The copyWithin() method overwrites the existing values.

// The copyWithin() method does not add items to the array.

// The copyWithin() method does not change the length of the array.

// The flat() method creates a new array with sub-array elements concatenated to a specified depth.
console.log("----flat---");
const myArr = [
    [1, 2],
    [3, 4],
    [5, 6],
];
const newArr = myArr.flat();
console.log(newArr);

// Splicing and Slicing Arrays
// The splice() method can be used to add new items to an array:
console.log("----splice method to add two element ---");
console.log(fruits);
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);
// The first parameter (2) defines the position where new elements should be added (spliced in).

// The second parameter (0) defines how many elements should be removed.

// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

// The splice() method returns an array with the deleted items:

// Using splice() to Remove Elements
console.log("----splice method to remove the element---");
console.log(fruits);
fruits.splice(0, 1);
console.log(fruits);
// The first parameter (0) defines the position where new elements should be added (spliced in).

// The second parameter (1) defines how many elements should be removed.

// The rest of the parameters are omitted. No new elements will be added.

// The slice() method slices out a piece of an array into a new array:
console.log("---------slice--------");
console.log(fruits);
const citrus = fruits.slice(2);
console.log(citrus);
console.log(fruits);
// The slice() method creates a new array.

// The slice() method does not remove any elements from the source array.

const cit = fruits.slice(1, 3);
console.log(cit);
// The method then selects elements from the start argument, and up to (but not including) the end argument.
