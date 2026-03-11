


function reverseWords(str) {

    let result = "";
    let word = str.split(" ");
    for(let i = word.length-1; i>=0; i--) {
        result += word[i] + " ";
    }
    console.log(result);
    

}

reverseWords("i like this program very much");