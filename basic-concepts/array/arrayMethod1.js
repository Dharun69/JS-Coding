//map // create an new array and always returns the array
let numbers = [1, 2, 3];
let double = numbers.map((e) => e * 2);
console.log(double);

// F -> C
//(F-32) * (5/9)
let fahTemp = [32, 34, 54, 212];

function fahToCel(fah) {
    return (fah - 32) * (5 / 9);
}

let celTemp = fahTemp.map(fahToCel);
console.log(celTemp);

//2 filter
let num = [1, 2, 3, 4, 5, 6, 4, 5, 6, 2];
let evenNum = num.filter((e) => e % 2 === 0);
console.log(evenNum);

// for(let i=0; i<num.length; i++){
//     if(num[i] % 2 === 0){
//         console.log(num[i]);
//     }
// }

let employee = [
    { name: "john", age: 32, gender: "male" },
    { name: "d", age: 43, gender: "female" },
    { name: "ad", age: 54, gender: "male" },
    { name: "adaf", age: 45, gender: "female" },
    { name: "safd", age: 23, gender: "male" },
];

let femaleEmpOver30 = employee.filter((emp) => {
    return emp.gender === "female" && emp.age > 30;
});
console.log(femaleEmpOver30);

//reduce
//
let numb = [1, 2, 3, 4, 5]; //15
let sum = numb.reduce((acc, num) => acc + num, 0);
//1st ---> 0+1 = 1
//2nd --> 1+2 = 3
//3rd ---> 3+3 =6
//4th ---> 6+4 = 10
///5th ---> 10+5 =15
console.log(sum);

//max number in the array
let top = [23, 34, 54, 3, 23, 73];
let max = top.reduce((max, num) => {
    if (num > max) {
        return num;
    } else {
        return max;
    }
}, top[0]);
console.log(max);

//cart : name, price
let cartItems = [
    { name: "Jeans", price: 500 },
    { name: "shrit", price: 1000 },
    { name: "shoes", price: 1324 },
    { name: "hat", price: 200 },
    { name: "Tshirt", price: 399 },
];

let totalCost = cartItems.reduce((total, item) => total + item.price, 0);
console.log(totalCost);
