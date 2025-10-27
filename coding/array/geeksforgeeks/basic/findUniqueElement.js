function findUniqueElement(k, arr) {
    let freq = {};
    for (let i = 0; i < arr.length; i++) {
        freq[arr[i]] = (freq[arr[i]] || 0) + 1;
    }
    return freq;

    for (const key in freq) {
        if (freq[key] !== k) {
            return key;
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
