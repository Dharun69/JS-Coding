// In JavaScript, strings are indexed starting from 0,
function reverseStr(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result = result + str[i];
    }
    console.log(result);
}
reverseStr("GeeksforGeeks");

function reverseStr1(str) {
    return str.split("").reverse().join("");
}

console.log(reverseStr1("GeeksforGeeks"));

// using two pointers




function reverseString() {
    let str = "dharun";
    let split = str.split("");
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        [split[start], split[end]] = [split[end], split[start]];
        start++;
        end--;
    }
    console.log(split);
}

reverseString();
