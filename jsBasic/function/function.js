//1. function declaration

function add(a, b) {
    return a + b;
}
const sum = add(5, 3);
console.log(sum);

//2. function expression (it's kind of anonymous funciton)

const multiply = function (x, y) {
    return x * y;
};
const mul = multiply(5, 3);
console.log(mul);

//3. Arrow function expression (it's kind of anonymous funciton)
const divide = (t1, t2) => t1 / t2;
const div = divide(20, 4);
console.log(div);

//4. function constructor
const subtract = new Function("a", "b", "return a - b"); //3rd par behave like function body
const subs = subtract(3, 5);
console.log(subs);

//5. IIFE(Immdiately invoked function expression)
// (function(){
//     console.log('server is up n running on port 3000');
// })();

// 6. Generator Function
// Function * and yield keyword

function* generatorNumberSequence() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}
const generator = generatorNumberSequence();
console.log(generator.next().value);
console.log(generator.next().value);

// 7 . Annonymous function
// doesn't have no specific name

//  const numbers = [1,2,3,4,5];
//  const sqaureNumbers = numbers.map(function(e){
//     return e * e;
//  });
// console.log(sqaureNumbers);

const numbers = [1, 2, 3, 4, 5];
const sqaureNumbers = numbers.map((e) => {
    return e * e;
});
console.log(sqaureNumbers);

//8. Recursive function
// a function call itself during a execution

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
const fact = factorial(5);
console.log(fact);

//9. Higher-order function

function addition(a, b) {
    return a + b;
}

function operate(funcName, a, b) {
    /// //give me a function name (operator)
    return funcName(a, b);
}
const s = operate(addition, 5, 6);
console.log(s);
