// function isSubset(a, b) {
//     let freqA = {};
//     let freqB = {};

//     for (const ch of a) {
//         freqA[ch] = (freqA[ch] || 0) + 1;
//     }
//     for (const ch of b) {
//         freqB[ch] = (freqB[ch] || 0) + 1;
//     }

//     for (const key in freqB) {
//         if (!freqA[key] || freqA[key] < freqB[key]) {
//             return false;
//         }
//     }
//     return true;
// }

function isSubsetUsingMap(a, b) {
    let freqMap = new Map();

    for (let ch of a) {
        if (freqMap.has(ch)) {
            freqMap.set(ch, freqMap.get(ch) + 1);
        }
    }
    console.log(freqMap);
}

let a = [11, 7, 1, 13, 21, 3, 7, 3],
    b = [11, 3, 7, 1, 7];

// console.log(isSubset(a, b));

console.log(isSubsetUsingMap(a, b));
