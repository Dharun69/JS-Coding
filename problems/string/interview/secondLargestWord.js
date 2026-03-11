

function secondLargestWord(str) {


    let words = str.split(" ");
    let largest = "";
    let secondLargest = "";

    for (let word of words) {
        if (word.length > largest.length) {
            secondLargest = largest;
            largest = word;
        } else if (word.length > secondLargest.length && word !== largest) {
            secondLargest = word;
        }
    }

    return secondLargest;

}
let str = "The quick brown fox jumps over the lazy dog";
console.log(secondLargestWord(str)); // Output: "jumps"