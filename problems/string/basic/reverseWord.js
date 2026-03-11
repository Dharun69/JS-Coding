

function reverseWord(str) {
    let result = "";

    let word = str.split(" ");

    for (let i = word.length - 1; i >= 0; i--) {
        result += word[i] + " "
    }

    console.log(result);



}


reverseWord("The quick brown fox");