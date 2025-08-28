const users = [
    { firstName: "dharun", lastName: "R", age: 24 },
    { firstName: "pooj", lastName: "j", age: 25 },
    { firstName: "satz", lastName: "g", age: 23 },
    { firstName: "siv", lastName: "b", age: 25 },
];

// list of full names

const output = users.map((x) => x.firstName + " " + x.lastName);

console.log(output);

// { 24: 1 , 25 : 2, 23 : 1}

const out1 = users.reduce(function (acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }
    return acc
}, {});

console.log(out1);


// chaning 

const output3 = users.filter((x) => x.age < 30)
.map((x) => x.firstName);
console.log(output3);
