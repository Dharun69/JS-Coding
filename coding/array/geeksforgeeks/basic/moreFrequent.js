// Input: arr[] = [1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5], x = 4, y = 5
// Output: 4
// Explanation: frequency of 4 is 4.frequency of 5 is 1.Since 4>1 so return 4

// function moreFrequent(arr, x, y) {
//     let countX = 0;
//     let countY = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === x) {
//             countX++;
//         } else if (arr[i] === y) {
//             countY++;
//         }
//     }
//     if (countX > countY) {
//         return x;
//     } else if (countY > countX) {
//         return y;
//     } else if (countX === countY) {
//         return x < y ? x : y;
//     }
// }

// console.log(moreFrequent(arr, x, y));

function moreFrequent1(arr, x, y) {
    const freq = {};

    // Count frequency of all elements
    for (let i = 0; i < arr.length; i++) {
        freq[arr[i]] = (freq[arr[i]] || 0) + 1;
    }

    console.log(freq);

    // Compare frequencies of x and y
    if (freq[x] > freq[y]) {
        return x;
    } else if (freq[y] > freq[x]) {
        return y;
    } else {
        return Math.min(x, y);
    }
}

let arr = [1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5],
    x = 4,
    y = 5;

console.log(moreFrequent1(arr, x, y));
