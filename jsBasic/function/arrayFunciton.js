//1. arrow func is kind of anonymous func doesn't have any name

const sqaure = (num) => num * num; //1 parameter
const res = sqaure(5);
console.log(res);

const msg = () => "hello js"; //no parameter arrow func
const m = msg();
console.log(m);

const add = (a, b) => a + b;
console.log(add(5, 6));

//parenthesis is not required when we are distracting for multiple paramenters

const person = {
    firstName: "naveen",
    lastName: "R",
};
const getFullName = (person) => `${person.firstName} ${person.lastName}`;
const fullName = getFullName(person);
console.log(fullName);

const greet = (userNmae = "guest", age = 0) => `Hello ${userNmae}! you are ${age} years old`;
const g1 = greet();
console.log(g1);

const g2 = greet("Tom", 1);
console.log(g2);

//arrow func with rest parameters (... parameters) (varargs)

//... behave like array // ...we have pass n number parameters
const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
const total = sum(2, 5, 6, 7);
console.log(total);

const broswerInfo = (browser = "chrome", ...details) => {
    console.log(`broswer: ${browser}`);
    console.log("other details:", details);
};
broswerInfo();
broswerInfo("firefox", "113.44", "mozilla", "headless");

// findout the max
const maxVal = (a, b, c) => {
    return Math.max(a, b, c);
};
console.log(maxVal(4, 6, 7));
