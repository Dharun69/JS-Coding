function countOcc(word) {

    let freqMap = new Map();

    for (let ch of word) {
        if (freqMap.has(ch)) {
            freqMap.set(ch, freqMap.get(ch) + 1);
        } else {
            freqMap.set(ch, 1);
        }
    }
    console.log(freqMap);

    for (let [key, value] of freqMap) {
        console.log(`${key} : ${value}`);
    }
}


let word = "dharun";
countOcc(word);





