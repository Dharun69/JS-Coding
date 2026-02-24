// 5. Frequency program

function calculateFrequency(arr) {

    // Create an empty object to store frequencies
    let frequency = {};

    // Iterate through the array
    arr.forEach(element => {
        
     // If the element is already in the frequency object, increment its count
    if(frequency[element]) {
        frequency[element]++;
    } else {
       // If the element is encountered for the first time, set its count to 1
        frequency[element] = 1;
    }
});
    // Return the frequency object
  return frequency;
}

let arr = [1, 2, 3, 4, 5, 1, 2, 3, 1, 2, 1];
let frequencies = calculateFrequency(arr);
console.log("Frequency of elements in an array is :", frequencies);


// This program defines a function calculateFrequency which takes an array as input and returns an object where the keys are the elements of the array and the values are the frequencies of those elements. You can call this function with any array to get the frequency of its elements.

