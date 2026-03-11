function findDuplicates(arr) {
    let result = [];
    let freq = {};

    // Count frequencies (correct loop for array)
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }

    // Pick numbers that appear exactly twice (correct loop for object)
    for (let key in freq) {
        if (freq[key] === 2) {
            result.push(Number(key));
        }
    }

    return result;
}

let arr = [1, 2, 3, 1, 4, 5, 2];
console.log(findDuplicates(arr)); // [1, 2]
