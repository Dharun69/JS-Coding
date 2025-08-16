function separateVowel() {
    let str = "selenium";
    let vowels = "";
    let consonants = "";

    for (let i = 0; i < str.length; i++) {
        ch = str.charAt(i);
        if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
            vowels += ch;
        } else {
            consonants += ch;
        }
    }

    console.log("Vowels: " + vowels);
    console.log("Consonants: " + consonants);
}
separateVowel();

// Approach 2

function vowel(str) {
    let vowels = [];
    let consonants = [];

    for (let i = 0; i < str.length; i++) {
        let ch = str.charAt(i);

        if (isVowel(ch)) {
            vowels.push(ch);
        } else {
            consonants.push(ch);
        }
    }

    console.log(`Vowels: ${vowels}`);
    console.log(`Consonants: ${consonants}`);
}

function isVowel(ch) {
    return "aeiou".includes(ch);
}

let str = "Hello";
vowel(str);
