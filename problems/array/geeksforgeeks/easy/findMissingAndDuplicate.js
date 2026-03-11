function findMissingAndDuplicate(arr) {
    let n = arr.length;
    let missing = -1;
    let duplicate = -1;

    for (let i = 0; i < n; i++) {
        let index = Math.abs(arr[i]) - 1;

        if (arr[index] < 0) {
            duplicate = Math.abs(arr[i]);
        } else {
            arr[index] = -arr[index];
        }
    }

    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            missing = i + 1;
            break;
        }
    }

    return { missing, duplicate };
}

// Example usage:
let arr = [3, 1, 3, 5, 4];
let result = findMissingAndDuplicate(arr);
console.log(`Missing Number: ${result.missing}, Duplicate Number: ${result.duplicate}`);

function findMissingAndDuplicate1(arr) {
    let n = arr.length;
    let freq = {};
    let duplicate = -1;
    let missing = -1;

    // count frequency of each number
    // for (let num of arr) {
    //     if (freq[num]) {
    //         freq[num]++; // increment count
    //     } else {
    //         freq[num] = 1; // first time
    //     }
    // }

    // Count frequency of all elements
    for (let i = 0; i < arr.length; i++) {
        freq[arr[i]] = (freq[arr[i]] || 0) + 1;
    }

    // check which number is missing or repeating
    for (let i = 1; i <= n; i++) {
        if (!freq[i]) {
            missing = i; // freq = 0 → missing
        } else if (freq[i] === 2) {
            duplicate = i; // freq = 2 → repeated
        }
    }

    return [duplicate, missing];
}

// Example usage:
let arr1 = [3, 1, 3, 5, 4];

let result1 = findMissingAndDuplicate1(arr1);
console.log(`Duplicate Number: ${result1[0]}, Missing Number: ${result1[1]}`);
