function findUniqueElement(k, arr) {
    let freq = {};
    for (let i = 0; i < arr.length; i++) {
        freq[arr[i]] = (freq[arr[i]] || 0) + 1;
    }
    // return freq;

    // for (const key in freq) {
    //     if (freq[key] !== k) {
    //         return key;
    //     }
    // }
    // Find element whose frequency is not a multiple of k
    for (const key in freq) {
        if (freq[key] % k !== 0) {
            return Number(key);
        }
    }
}

let k = 3;
let arr = [6, 2, 5, 2, 2, 6, 6];
console.log(findUniqueElement(k, arr));

// function segregateEvenOdd(arr) {
//     // code here
//     let result = [];
//     arr.sort((a, b) => a - b);

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             result.push(arr[i]);
//         }
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// let arr = [12, 34, 45, 9, 8, 90, 3];
// console.log(segregateEvenOdd(arr));


function findUniqueElementUsingMap(k, arr) {
    let freq = new Map();

    // Count frequency of each element
    for (let num of arr) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    // Find element whose frequency is not a multiple of k
    for (let [key, value] of freq) {
        if (value % k !== 0) {
            return key;
        }
    }
}

// Example 1
let k1 = 3;
let arr1 = [6, 2, 5, 2, 2, 6, 6];
console.log(findUniqueElementUsingMap(k1, arr1)); // Output: 5


function findUniqueNumbers(arr) {
    let uniqueNums = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
            uniqueNums.push(arr[i]);
        }
    }

    return uniqueNums;
}

// Example
console.log(findUniqueNumbers([1, 2, 2, 3, 4, 4, 5]));
// Output: [1, 3, 5]
