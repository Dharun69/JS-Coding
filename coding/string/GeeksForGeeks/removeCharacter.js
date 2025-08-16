function removeChars(s1, s2) {
    let result = "";

    for (let i = 0; i < s1.length; i++) {
        if (!s2.includes(s1[i])) {
            result += s1[i];
        }
    }
    return result;
}

console.log(removeChars("computer", "cat"));
