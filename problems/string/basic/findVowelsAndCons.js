function findVowelsAndCons(str) {
    // Convert to lowercase to handle uppercase letters
    str = str.toLowerCase();

    let vowels = 0;
    let consonants = 0;

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];

        // Only consider alphabet characters
        if (ch >= 'a' && ch <= 'z') {
            if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
                vowels++;
            } else {
                consonants++;
            }
        }
    }

    console.log(`Vowels: ${vowels}, Consonants: ${consonants}`);
}

// Example
findVowelsAndCons("Hello World");
findVowelsAndCons("Automation");