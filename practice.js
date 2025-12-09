

let arr = [3, 1, 3, 4, 2];
let freq = {};
let missing = -1;
let duplicate = -1;

for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
}

console.log(freq);