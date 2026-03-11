function moveZeros(arr) {
    let j = 0; // pointer for position of next non-zero

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            // swap only if i != j
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        }
    }

    return arr;
}

let arr = [1, 2, 0, 4, 3, 0, 5, 0];
console.log(moveZeros(arr));

function moveZeros1(arr) {
    let index = 0;

    // Step 1: copy all non-zero elements to the front
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[index] = arr[i];
            index++;
        }
    }

    // Step 2: fill remaining positions with zeros
    while (index < arr.length) {
        arr[index] = 0;
        index++;
    }

    return arr;
}

let arr1 = [1, 2, 0, 4, 3, 0, 5, 0];
console.log(moveZeros1(arr1));
