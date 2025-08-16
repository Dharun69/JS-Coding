let myArray = []; //an empty array

let lang = ["java", "python", "JS"];
//push
//adds one or more elements to the end of an existing array and return the new length of the

lang.push("ruby", "html");
console.log(lang);

//pop
// remove the last ele from the array
let numbers = [1, 2, 3, 4, 5];
numbers.pop();
console.log(numbers);

//3. shift
// remove the first element from the array
let fruits = ["apple", "bannana", "orange"];
let fristFruits = fruits.shift();
console.log(fristFruits);
console.log(fruits);

//4. unshift
let colorus = ["red", "green", "black", "white"];
colorus.unshift("blue"); //add one more ele at the begining of the array
console.log(colorus);
console.log(colorus.length);

//5. splice
//it's allows you add and remove element from specific index from array

let animals = ["dog", "cat", "bird", "fish"];
animals.splice(1, 2, "bear", "elephant");
console.log(animals);

//6. slice //it returns the subset
let pop = [1, 2, 3, 4, 5];
let newPop = pop.slice(1, 4); //include the begining index and exclude the last index
console.log(newPop);

//7. concat
//combined two or more arrays and create a new array

let fr = ["apple", "bannana", "orange"];
let num = [1, 2, 3, 4, 5];
let mixed = fr.concat(num);
console.log(mixed);

//8 indexOf
//return the first index at which given element can be found in the array and return -1 if the element not there

let col = ["red", "green", "blue", "red"];
let indexRed = col.indexOf("red");
console.log(indexRed);
// let redSecondIndex = col.indexOf('red',1) //start from
let redSecondIndex = col.indexOf("red", col.indexOf("red" + 1)); //start from
console.log(redSecondIndex);

//9. includes

let test = ["admin", "customer", "seller", "vendor"];
let flag = test.includes("seller"); //we are checking whether seller is there or not it returns boolen
console.log(flag);

//10. forEach
let numb = [1, 3, 4, 5, 6, 7, 8];
numb.forEach((e) => {
    ///call back func
    console.log(e + 2);
});
