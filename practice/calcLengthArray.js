// calculate the length of the array without using length method

// using length method
var arr1 = [10,20,30,40,50];
console.log(arr1.length);

// without
function arrayLength(arr) {

    var count = 0;

    // Start a for loop, initializing the loop variable i to 0, and iterate as long as arr[i] is not undefined
    for(var i=0; arr[i] !== undefined; i++) {

        // Increment count by 1 for each element encountered in the array
        count ++;
    }
    // After the loop finishes, return the final count, which represents the length of the array
    return count;
}
console.log("length of the array is :", arrayLength(arr1));

// It iterates through the array using a for loop, incrementing a counter variable count for each element until 
// it encounters an undefined element, indicating the end of the array. 
// Finally, it returns the count, which represents the length of the array.
