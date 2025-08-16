// find all o’s in array and make them all separately one side in a array in js

// creating a function that takes an array as input, loops through it to find all occurrences of 'o', 
// and then constructs a new array with all the 'o's placed on one side.

function seperateOs(array) {

    // Initialize an empty array to store 'o's
    const osArray = [];

    // Initialize an empty array to store other characters
    const otherCharsArray = [];

    // Loop through each element in the input array
    array.forEach(item => {
        
        // Check if the current element is 'o'
        if(item === '0') {

            // If it is 'o', push it into the osArray
            osArray.push(item);
        } else {

            // If it is not 'o', push it into the otherCharsArray
            otherCharsArray.push(item);
        }
    });

    // Concatenate the osArray with the otherCharsArray
    return osArray.concat(otherCharsArray);
} 

const inputArray = ['0', '1', '3', '0', '5', '0', '8'];
const separatedArrays = seperateOs(inputArray);
console.log(separatedArrays);
