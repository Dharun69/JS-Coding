

function incrementStr(str) {
    let incrementedStr = "";
    for (let ch of str) {
        if (ch >= 'a' && ch <= 'z') {
            incrementedStr += String.fromCharCode((ch.charCodeAt(0) - 97 + 1) % 26 + 97);
        } else if (ch >= 'A' && ch <= 'Z') {
            incrementedStr += String.fromCharCode((ch.charCodeAt(0) - 65 + 1) % 26 + 65);
        } else {
            incrementedStr += ch; // Non-alphabetic characters remain unchanged
        }
    }
    return incrementedStr;
}

let str = "Hello, World!";
console.log(incrementStr(str)); // Outputs: "Ifmmp, Xpsme!"


function incrementString1(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        ch = String.fromCharCode(ch.charCodeAt(0) + 1);
        result += ch;
    }

    return result;
}

console.log(incrementString1("ABC")); // BCD




