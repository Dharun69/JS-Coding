function isIsogram(s) {
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] === s[j]) {
                return 0;
            }
        }
    }
    return 1;
}

console.log(isIsogram("machine"));

function isIsogram1(s) {
    return new Set(s).size === s.length ? 1 : 0;
}

console.log(isIsogram1("geeks"));

