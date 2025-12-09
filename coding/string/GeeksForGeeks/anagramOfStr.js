function remAnagram(s1, s2) {
    let freq1 = {};
    let freq2 = {};

    for (let ch of s1) {
        freq1[ch] = (freq1[ch] || 0) + 1;
    }

    for (let ch of s2) {
        freq2[ch] = (freq2[ch] || 0) + 1;
    }

    let allChars = new Set([...Object.keys(freq1), ...Object.keys(freq2)]);
    let delections = 0;

    for (let char of allChars) {
        let count1 = freq1[char] || 0;
        let count2 = freq2[char] || 0;
        delections += Math.abs(count1 - count2);
    }

    return delections;
}

console.log(remAnagram("bcadeh", "hea")); // Output: 3

// remAnagram(s1, s2) {

//         let freq1 = new Map();
//         let freq2 = new Map();

//         for(let ch of s1){
//             freq1.set(ch, (freq1.get(ch)||0) +1)
//         }

//         for(let ch of s2){
//             freq2.set(ch, (freq2.get(ch)||0) +1)
//         }

//         let allChar = new Set([...freq1.keys(), ...freq2.keys()]);

//         let delections = 0;

//         for(let char of allChar) {
//             let count1 = freq1.get(char) || 0;
//             let count2 = freq2.get(char) || 0;
//             delections += Math.abs(count1-count2);

//         }

//         return delections;

//     }

function isAnagram(str1, str2) {
    let freq = {};

    for (let ch of str1) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    for (let ch of str2) {
        if (!freq[ch]) return false;
        freq[ch]--;
    }

    return true;
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("race", "care")); // true
console.log(isAnagram("hello", "world")); // false
