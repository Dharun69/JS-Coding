// Neon Number
//         num=9
//         9^2(Square)=81
//         8+1=9

function isNeonNumber(num) {

    // Calculate the square of the number
    let square = num * num;
    
    // Convert the square to a string to easily sum its digits
    let squareStr = square.toString();
    
    // Calculate the sum of digits of the square
    let sum = 0;
    for (let digit of squareStr) {
        sum += parseInt(digit);
    }
    
    // Check if the sum equals the original number
    return sum === num;
}

const num = 9;
console.log(num + " is a neon number: " + isNeonNumber(num));


// int n=9;
// int square = num * num;
// int check = 0;
//         while (square > 0) {
//             int rem = square % 10;
//             check = check + rem;
//             square = square / 10;
//         }
//         if (num == check) {
//             System.out.println("Neon Number");
//         } else {
//             System.out.println("Not Neon Number");
//         }

