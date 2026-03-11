
function charFrequency(str) {

    let map = new Map();

    for (let ch of str) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    for (let [key, value] of map) {
        console.log(key + " -> " + value);
    }
}

charFrequency("automation");

function charFrequencyBrute(str) {

    for (let i = 0; i < str.length; i++) {

        let count = 0;

        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j]) {
                count++;
            }
        }

        if (str.indexOf(str[i]) === i) {
            console.log(str[i] + " -> " + count);
        }
    }
}

charFrequencyBrute("automation");