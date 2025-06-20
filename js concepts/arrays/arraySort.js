// The sort() method sorts an array alphabetically:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);


// The reverse() method reverses the elements in an array:

fruits.reverse();
console.log(fruits);


// the toSorted() method as a safe way to sort an array without altering the original array.
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
console.log(sorted);
console.log(months);

// added the toReversed() method as a safe way to reverse an array without altering the original array.const sorted = months.toSorted();
const reversed = months.toReversed();
console.log(reversed);




const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b) {return a -b});  // ascending
points.sort(function(a, b){return b - a});  // descending
console.log(points);



