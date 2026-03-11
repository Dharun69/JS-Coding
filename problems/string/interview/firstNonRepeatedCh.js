

function firstNonRepeatedCh(str) {
    for (let i = 0; i < str.length; i++) {
        let count = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j]) {
                count++;
            }
        }
        if (count === 1) {
            console.log(str[i]);
            break;
        }
    }
}

firstNonRepeatedCh("automation");



function firstNonRepeatedCh1(str) {
    let freq = {};

    // Step 1: count frequency
    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        freq[ch] = (freq[ch] || 0) + 1;
    }

    // Step 2: find first non-repeating
    for (let i = 0; i < str.length; i++) {
        if (freq[str[i]] === 1) {
            console.log(str[i]);
            return;
        }
    }
}

firstNonRepeatedCh1("automation");


function firstNonRepeatedCh2(str) {
    let map = new Map();

    // count frequency
    for (let ch of str) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    // find first non-repeating
    for (let ch of str) {
        if (map.get(ch) === 1) {
            console.log(ch);
            return;
        }
    }
}

firstNonRepeatedCh2("automation");