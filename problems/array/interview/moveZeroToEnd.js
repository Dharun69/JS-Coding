


// move all zeroes to the end of the array while maintaining the relative order of the non-zero elements

function moveZeroToEnd(arr) {
    let nonZeroIndex = 0; // Pointer for the position of the next non-zero element  
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            // Swap the non-zero element with the element at nonZeroIndex
            [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];
            nonZeroIndex++; // Move the pointer to the next position
        }
    }
    return arr;
}

// Example usage:
const arr = [0, 1, 0, 3, 12];
console.log(moveZeroToEnd(arr)); // Output: [1, 3, 12, 0, 0]    


function moveZeroToEnd1(arr) {
    let nonZeroIndex = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== 0) {
            arr[nonZeroIndex] = arr[i];
            nonZeroIndex++;
        }
    }

    for(let i = nonZeroIndex; i < arr.length; i++) {
        arr[i] = 0;
    }

    return arr;
}

// Example usage:
const arr1 = [0, 1, 0, 3, 12];
console.log(moveZeroToEnd1(arr1)); // Output: [1, 3, 12, 0, 0]