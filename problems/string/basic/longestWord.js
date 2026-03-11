


function longestWord() {

    let str = "The quick brown fox";
    let split = str.split(" ");
    let longest = "";

    for(let word of split) {

        if(word.length > longest.length) {
            longest = word;
        }
    }
    console.log(longest);
    

}

longestWord();


function longestWord1() {
    let str = "The quick brown fox";
    let word = "";
    let longest = "";

    for(let i=0; i<str.length; i++) {
        if(str[i] !== " ") {
            word += str[i];
        } else {
            if(word.length > longest.length) {
                longest = word;
            }
             word = "";
        }
       
    }

    if(word.length > longest.length) {
        longest = word;
    }

    console.log(longest);
    
}

longestWord1();