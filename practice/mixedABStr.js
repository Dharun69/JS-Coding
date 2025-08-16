// 8. In given mixed A and B strings I have to print separate “A” or “B” string

function separateStrings(mixedString) {

    // 2. Split the mixedString into an array of characters, then filter out only the characters that are 'A',
    //  finally, join the filtered characters back into a string. This creates a string containing only 'A's.
    const stringA = mixedString.split('').filter(char => char === 'A').join('');

    // 3. Similar to step 2, but here we filter out only the characters that are 'B's.
    const stringB = mixedString.split('').filter(char => char === 'B').join('');

    console.log("String A :", stringA);
    console.log("String B :", stringB);
}

const mixedString = "ABABABBBABA";

// 7. Log a message indicating what the function will do, but note that it's incorrectly stating that it will print
// the separated strings. The actual function prints the counts of 'A's and 'B's separately.
// The function doesn't separate the strings, rather it counts the occurrences of 'A's and 'B's separately.
console.log("The seperated strings are :", mixedString);

separateStrings(mixedString);
