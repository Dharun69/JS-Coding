function findFirstOccurrence(txt, pat) {
    let n = txt.length,
        m = pat.length;

    for (let i = 0; i <= n - m; i++) {
        let j;
        for (j = 0; j < m; j++) {
            if (txt[i + j] !== pat[j]) {
                break;
            }
        }
        if (j === m) {
            return i;
        }
    }
    return -1;
}


console.log(findFirstOccurrence("GeeksForGeeks", "Fr")); // Output: -1
console.log(findFirstOccurrence("GeeksForGeeks", "For")); // Output: 5
