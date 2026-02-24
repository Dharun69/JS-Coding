function frequencyCounter(str) {
    let freqMap = new Map();

    for (let ch of str) {
        if (freqMap.has(ch)) {
            freqMap.set(ch, freqMap.get(ch) + 1);
        } else {
            freqMap.set(ch, 1);
        }
    }
    return freqMap;
}

let str = "coding practice";
console.log(frequencyCounter(str));
