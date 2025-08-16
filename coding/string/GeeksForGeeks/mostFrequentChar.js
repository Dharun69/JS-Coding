function mostFrequentCh() {
    let str = "output";

    let freq = new Map();

    for (let ch of str) {
        freq.set(ch, (freq.get(ch) || 0) + 1);
    }

    let maxValue = Math.max(...freq.values());

    let res = [...freq.entries()].filter(([key, val]) => val === maxValue).map(([key]) => key);
    let result = res.sort()[0];

    console.log(result);
}
// uses Map & chaining
mostFrequentCh();

// Using an Object Instead of Map (Classic way):
function mostFrequentChar(str) {
    const freq = {};
    for (let ch of str) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    let maxChar = '';
    let maxFreq = 0;

    for (let ch in freq) {
        if (freq[ch] > maxFreq || (freq[ch] === maxFreq && ch < maxChar)) {
            maxChar = ch;
            maxFreq = freq[ch];
        }
    }

    return maxChar;
}

console.log(mostFrequentChar("output")); // 👉 't'

