function removeFirstOcc(s) {
    let res = s.replace("G", "");
    console.log(res);
}

function deleteFirstOcc(s) {
    let res = s.slice(1);
    console.log(res);
}

let s = "GeeksForGeeks";
removeFirstOcc(s);
deleteFirstOcc(s);


// let s1 = "Hello, welcome to JavaScript programming!";
// let s2 = s1.replace("JavaScript", "");
// console.log(s2); 


let s1 = "Hello, JavaScript world!";
let s2 = s1.split("JavaScript");
console.log(s2);



// First Letter of a String Uppercase
const str = "javaScript";
const res = str.charAt(0).toUpperCase() + str.slice(1);
console.log(res);

//Get The Last Caracter of a String

const word = "   JavaScript";
const lChar = word.charAt(word.length-1);
console.log(lChar);
const trim = word.trim();
console.log(trim);
