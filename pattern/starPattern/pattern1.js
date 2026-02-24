// *
// **
// ***
// ****
// *****

/**
 * Prints a right-angled triangle star pattern of given height.
 *
 * @param {number} n - The number of rows for the star pattern.
 */
function rightAngleTriangle(n) {
    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= row; col++) {
            process.stdout.write("*");
        }
        console.log();
    }
}
rightAngleTriangle(5);
console.log("--------------------------------------------------------");

// using string

function rightAngleTriangle1(n) {
    for (let row = 1; row <= n; row++) {
        let stars = "";
        for (let col = 1; col <= row; col++) {
            stars += "* ";
        }
        console.log(stars);
    }
}
rightAngleTriangle1(4);
console.log("--------------------------------------------------------");

// *****
// *****
// *****
// *****
// *****

/**
 * Prints a square pattern of asterisks of size n x n.
 *
 * @param {number} n - The size of the square pattern.
 */
function squarePattern(n) {
    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= n; col++) {
            process.stdout.write("* ");
        }
        console.log();
    }
}
squarePattern(5);
console.log("--------------------------------------------------------");

// *****
// ****
// ***
// **
// *

function InvertedRightAngleTriange(n) {
    for (let row = 1; row <= n; row++) {
        for(let col = n; col >=row; col-- ){
            process.stdout.write("* ");
        }
        console.log();
    }
}
InvertedRightAngleTriange(6);

console.log("--------------------------------------------------------");


function InvertedRightAngleTriange1(n) {
    for (let row = n; row >= 1; row--) {
        for (let col = 1; col <= row; col++) {
            process.stdout.write("* ");
        }
        console.log();
    }
}
InvertedRightAngleTriange1(5);


console.log("--------------------------------------------------------");

function InvertedRightAngleTriange2(n) {
    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= n - row+1; col++) {
            process.stdout.write("* ");
        }
        console.log();
    }
}
InvertedRightAngleTriange2(5);


