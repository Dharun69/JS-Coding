// set Object - collection of values
//  values are unique

let arr = [3, 6, 4, 2, 5, 8, 9, 5, 2];
let myset1 = new Set(arr);
console.log(myset1);

let arr2 = Array.from(myset1);
console.log(arr2);

//Map
// Map objects are collections of key-value pairs
// A key in the map may only occur once
// key or value can be object

let map1 = new Map();

map1.set("a", 1);
map1.set("b", 2);
map1.set("a", 4);
console.log(map1);


