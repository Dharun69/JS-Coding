

function uniqueValue(str) {
    let words = str.split(" ");
    let uniqueWords = new Set();

    for (let word of words) {
        uniqueWords.add(word);
    }

    return Array.from(uniqueWords);

}

let str = "The quick brown fox jumps over the lazy dog";
console.log(uniqueValue(str)); // Output: ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]


function uniqueValue1(str) {
    let words = str.split(" ");
    let uniqueWords = [];

    for (let word of words) {
        if (!uniqueWords.includes(word)) {
            uniqueWords.push(word);
        }
    }

    return uniqueWords;

}

str = "The quick brown fox jumps over the lazy dog";
console.log(uniqueValue1(str)); // Output: ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]


function uniqueChar(str) {
    let uniqueChars = new Set();
    for (let char of str) {
        uniqueChars.add(char);
    }
    return Array.from(uniqueChars);
}   
str = "hello world";
console.log(uniqueChar(str)); // Output: ["h", "e", "l", "o", " ", "w", "r", "d"]

function uniqueChar1(str) {
    let uniqueChars = [];
    for (let char of str) {
        if (!uniqueChars.includes(char)) {
            uniqueChars.push(char);
        }
    }
    return uniqueChars;
}   
str = "India is my Country";
console.log(uniqueChar1(str)); // Output: ["I", "n", "d", "i", "a", " ", "s", "m", "y", "C", "o", "u", "r", "t"]


// ✅ Print only characters that appear exactly once below are 3 different approaches


function uniqueChar2(str) {
    let charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return Object.keys(charCount).filter(char => charCount[char] === 1);
}   
str = "India is my Country";
console.log(uniqueChar2(str)); // Output: ["h", "e", "w", "r", "d"]


function uniqueChar3(str) {
     let result = [];

    for (let char of str) {
        if (char !== " " && str.indexOf(char) === str.lastIndexOf(char)) {
            result.push(char);
        }
    }

    return result.join(" ");
}
str = "India is my Country";
console.log(uniqueChar3(str)); // Output: "h e w r d"



function onlyUniqueChars(str) {
    let map = {};

    // Step 1: count frequency
    for (let char of str) {
        map[char] = (map[char] || 0) + 1;
    }

    // Step 2: collect unique chars
    let result = [];

    for (let char of str) {
        if (char !== " " && map[char] === 1) {
            result.push(char);
        }
    }

    return result.join(" ");
}

 str  = "India is my Country";
console.log(onlyUniqueChars(str));



function onlyUniqueChars1(str) {
    let charCount = new Map();

    // Step 1: Count frequency
    for (let char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Step 2: Collect unique characters
    let result = [];

    for (let char of str) {
        if (char !== " " && charCount.get(char) === 1) {
            result.push(char);
        }
    }

    return result.join(" ");
}

 str = "India is my Country";
console.log(onlyUniqueChars1(str));