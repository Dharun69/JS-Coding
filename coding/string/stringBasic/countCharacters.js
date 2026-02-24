function countCharacters(str) {
    let freq = {};
    for (let i = 0; i < str.length; i++) {
        freq[str[i]] = (freq[str[i]] || 0) + 1;
    }
    // return freq;

    let maxCount = 0;
    let mostFrequentChar = "";

    for (let char in freq) {
        if (freq[char] > maxCount) {
            maxCount = freq[char];
            mostFrequentChar = char;
        }
    }
    return mostFrequentChar;
}
let name1 = "poojitha";
console.log(countCharacters(name1));
