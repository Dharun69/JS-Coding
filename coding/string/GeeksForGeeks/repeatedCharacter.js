function firstRep(s) {
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] === s[j]) {
                return s[i];
            }
        }
    }
    return -1;
}

console.log(firstRep("geeksforgeeks"));
