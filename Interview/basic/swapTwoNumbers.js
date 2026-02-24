

function swapTwoNumbers(a, b) {
    // Using a temporary variable
    let temp = a;
    a = b;
    b = temp;   
    return [a, b];
}

// Example usage:
let x = 5, y = 10;
console.log(swapTwoNumbers(x, y)); // Output: [10, 5]

// Using destructuring assignment (ES6)
function swapTwoNumbersDestructuring(a, b) {
    [a, b] = [b, a];
    return [a, b];
}

// Example usage:
x = 5; y = 10;
console.log(swapTwoNumbersDestructuring(x, y)); // Output: [10, 5]

// Using arithmetic operations
function swapTwoNumbersArithmetic(a, b) {
    a = a + b; // a now holds the sum of a and b
    b = a - b; // b now holds the original value of a
    a = a - b; // a now holds the original value of b
    return [a, b];
}

// Example usage:
x = 5; y = 10;
console.log(swapTwoNumbersArithmetic(x, y)); // Output: [10, 5] 