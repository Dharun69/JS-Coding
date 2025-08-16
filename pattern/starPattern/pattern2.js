// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

function diamondPattern() {
    for (let row = 1; row <= 4; row++) {
        for (let col = 1; col <= row; col++) {
            process.stdout.write("* ");
        }
        console.log();
    }
    for (let row = 1; row <= 4; row++) {
        for (let col = 4; col > row; col--) {
            process.stdout.write("* ");
        }
        console.log();
    }
}

diamondPattern();

console.log("----------------------------------------------------------------");

// using formual

function diamondPattern1(n) {
    for (let row = 1; row <= n * 2; row++) {
        let totalColsInRow = row > n ? 2 * n - row : row;
        for (let col = 1; col <= totalColsInRow; col++) {
            process.stdout.write("* ");
        }
        console.log();
    }
}

diamondPattern1(5);
console.log("----------------------------------------------------------------");

//      *
//     * *
//    * * *
//   * * * *
//  * * * * *
//   * * * *
//    * * *
//     * *
//      *

function diamondPattern2(n) {
    for (let row = 1; row <= n * 2; row++) {
        let totalColsInRow = row > n ? 2 * n - row : row;
        let noOfSpaces = n - totalColsInRow;
        for (let space = 1; space <= noOfSpaces; space++) {
            process.stdout.write(" ");
        }
        for (let col = 1; col <= totalColsInRow; col++) {
            process.stdout.write("* ");
        }
        console.log();
    }
}

diamondPattern2(5);

console.log("----------------------------------------------------------------");

//      *
//     * *
//    * * *
//   * * * *
//  * * * * *

function triangleStarPattern(n) {
    for (let row = 1; row <= n ; row++) {
        let noOfSpaces = n - row;
        for (let space = 1; space <= noOfSpaces; space++) {
            process.stdout.write(" ");
        }
        for (let col = 1; col <= row; col++) {
            process.stdout.write("* ");
        }
        console.log();
    }
}

triangleStarPattern(5);