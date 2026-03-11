// 4. Find the unique elements in a given string

function findUniqueElements(str) {

  // Split the input string into an array of characters using the split method
  // The split method separates a string into substrings based on a specified separator and returns an array of substrings
  // In this case, the separator is an empty string (''), which means every character becomes a separate element in the array
  // For example, "hello" becomes ["h", "e", "l", "l", "o"]

  return Array.from(new Set(str.split('')));

   // Create a new Set from the array of characters obtained from the input string
    // A Set is a collection of unique values, meaning it automatically removes duplicate values
    // By passing the array of characters to the Set constructor, we get a Set containing only unique characters
}

let inputString = "hello bengaluru";

// Call the findUniqueElements function with inputString as argument
// This returns an array containing unique elements from inputString

let uniqueElements = findUniqueElements(inputString);
console.log(uniqueElements); // Output: ['h', 'e', 'l', 'o']

// This function efficiently finds unique elements in a string by utilizing the Set data structure to eliminate duplicates 
// and then converting the resulting Set back into an array using Array.from().

