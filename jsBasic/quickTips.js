//1. find unique values from array
const array = [1, 2, 3, 4, 5, 3, 4, 5, 1, 6];

let unique = [...new Set(array)];
console.log(unique);

//2. int to string
const num = 32;
const numStr = num + ""; //'32';
console.log(typeof numStr);
console.log(numStr + 10);
//or
const numStr1 = String(num); //'32'
console.log(typeof numStr1);
console.log(numStr1);

//3. float to int
const floatNum = 4.5343;
const intNum = parseInt(floatNum);
console.log(intNum);

//4. check if a variable is a number
const value = 56;
if (typeof value === "number" && !isNaN(value)) {
    console.log("is number");
}

//5. swap variable value
let a = 53;
let b = 42;
[a, b] = [b, a];
console.log(a, b);

//6. check if an object has a property
const person = {
    name: "john",
    age: 20,
};
if (person.hasOwnProperty("name")) {
    console.log("person has name property");
}

//7. remove falsy value from the array: {false: , 0, '', null, undefined, NaN}

const values = [1, 3, 4, 1, false, null, undefined];
const newVal = values.filter(Boolean);
console.log(newVal);

//8. string ---> upper case, lower case
const str = "Automation";
const u1 = str.toLocaleLowerCase();
const l1 = str.toUpperCase();
console.log(l1);
console.log(u1);

//9. check if array contains a value

const lang = ["java", "javascript", "python", "ruby"];
if (lang.includes("javascript")) {
    console.log("found");
}

//10. check if array is empty

const empty = [];
if (empty.length === 0) {
    console.log("array is empty");
}

//11. generat a random number
const min = 10;
const max = 200;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber);

//12. string to number
const strNum = "32";
const x1 = parseFloat(strNum);
console.log(x1);

//13 join array elements into a string

const words = ["hello", "world"];
const sentence = words.join(" ");
console.log(sentence);

//14 get object property
const user = {
    name: "tom",
    age: 34,
    dob: "01-04-1994",
};
console.log(user["name"]);

//15. clone an array or object

const marks = [23, 34, 45, 23, 54];
const marksDuplicate = [...marks];
console.log(marksDuplicate);
const userDup = { ...user }; // spread operator
console.log(userDup);

//16. convert object to array
const emp = {
    name: "tom",
    age: 34,
    dob: "01-04-1994",
};
//1 keys arrays
const keys = Object.keys(emp);
console.log(keys);
// values arrays
const val = Object.values(emp);
console.log(val);
// key : value pair array
const keyVal = Object.entries(emp);
console.log(keyVal);

//17. get current date and time
const currDate = new Date();
console.log(currDate.toLocaleString());

//18. check variable  is defined or not
let i;
if (typeof i === "undefined") {
    console.log("variable not defined");
}
console.log(i);

//19 trucate an array
const testing = [0, 1, 2, 3, 4, 5, 6, 7];
testing.length = 3;
console.log(testing);

//20 last item in array
const pop = [0, 1, 2, 3, 4, 5, 6, 7];
const n1 = pop.slice(-1);
console.log(n1);
