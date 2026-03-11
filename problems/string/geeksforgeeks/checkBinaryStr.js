function isBinary(s) {
    let binary = ["0", "1"]; 

    for (let i = 0; i < s.length; i++) {
        if (!binary.includes(s[i])) {
            return false; 
        }
    }

    return true;
}

// Test cases
console.log(isBinary("101")); // Output: true
// console.log(isBinary("11001")); // Output: true
// console.log(isBinary("12345")); // Output: false
// console.log(isBinary("10a01")); // Output: false
// console.log(isBinary("")); // Output: false (assuming non-empty input)
