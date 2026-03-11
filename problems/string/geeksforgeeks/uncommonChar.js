function uncommonChar() {
    let s1 = "swknwhkhhr";
    let s2 = "cgx";

    let result = "";

    for (let ch of s1) {
        if (!s2.includes(ch)) {
            result += ch;
        }
    }

    for (let ch of s2) {
        if (!s1.includes(ch)) {
            result += ch;
        }
    }

    let unquie = new Set(result);
    console.log(Array.from(unquie).sort().join(""));
}

uncommonChar();

