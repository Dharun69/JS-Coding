// 1. Array Reverse Using an Extra Array (Non In-place):

// using inbuilt method
function reverseArray(arr) {

    // creates a shallow copy of the input array using the slice() method,
    // and then reverses the copied array using the reverse() method, and finally returns the reversed array. 
    return arr.slice().reverse();
}

let oA = [1,2,3,4,5];
let revArray = reverseArray(oA);
console.log("Reversed Array order is :", revArray);


// without using inbuilt method
function reversArray(arr) {

    // Initialize an empty array to store the reversed elements
    let reversedArray = [];

    // Start a loop iterating from the last index of the input array down to the first index
    for(let i = arr.length - 1; i >= 0; i--) {

        // Push each element of the input array in reverse order into the reversedArray
        reversedArray.push(arr[i]);
    }

    // Return the reversedArray
    return reversedArray;
}

let oA1 = [11,22,33,44,55];
let revArray1 = reversArray(oA1);
console.log("Reversed Array order is :", revArray1);
