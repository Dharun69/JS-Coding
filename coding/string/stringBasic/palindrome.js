// palindrom
// using loop

function palindrom1() {
    let word = "racecar";
    let result = "";

    for (let i = word.length - 1; i >= 0; i--) {
        result = result + word[i];
    }

    if(word === result){
        console.log("It's palindrom");
    } else {
        console.log("It's not a plaindrom");
    }
}

palindrom1();

// using inbuilt
function isPalindrome(str) {
    let rev = str.split("").reverse().join("");
    if (rev == str) {
        return true;
    }
    return false;
}
let str1 = "racecar";
let str2 = "nitin";
let str3 = "Rama";
console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));


function checkPalindromForNum() {
    let num = 121;
    let originalNum = num;
    let rev = 0;

    while (num != 0) {
        let rem = num % 10;
        rev = rev * 10 + rem;
        num = Math.floor(num / 10);
    }

    if (originalNum === rev) {
        console.log("The given number is palindrom");
    } else {
        console.log("not palindrom");
    }
}
checkPalindromForNum();