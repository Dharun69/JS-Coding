// Occurances of count in a string - aabbccccabcddbbc

// Approach 1 -> count only 1 char
function countOccurences(str, char) {

    let count = 0;

    for(let i = 0; i < str.length; i++) {
        
        if(str[i] === char) {
            count++;
        }
    }
    return count;
}

const str = "aabbccccabcddbbc";
const charToCount = "c";
const occurrences = countOccurences(str, charToCount);
console.log(`Number of occurrences of '${charToCount}' in '${str}': ${occurrences}`);


// Approach 2 -> count all characters
function countCharacters(str) {

    const charCount = {};
    
    for (let char of str) {

        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    return charCount;
}

const str1 = "aabbccccabcddbbc";
const charCounts = countCharacters(str1);

console.log("Character counts :");

for (let char in charCounts) {
    console.log(`${char}: ${charCounts[char]}`);
}
