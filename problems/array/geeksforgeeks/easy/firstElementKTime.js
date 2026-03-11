function firstElementKTime(arr, k) {
    let freq = {};

    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;

        if (freq[num] === k) {
            return num;
        }
    }

    return -1;
}

let arr = [1, 7, 4, 3, 4, 8, 7];
let k = 2;

console.log(firstElementKTime(arr, k));
