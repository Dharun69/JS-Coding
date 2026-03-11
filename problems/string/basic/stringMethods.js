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

console.log(str1.replace("How", "who"));

let str = "rs7";
console.log(str.padEnd(5, 0));
