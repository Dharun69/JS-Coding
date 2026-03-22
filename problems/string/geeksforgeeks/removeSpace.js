function removeSpaces(s) {
    let split = s.split(" ");
    let result = [];
    for (let i = 0; i < split.length; i++) {
        if (split[i].length != 0 ) {
            result.push(split[i]);
        }
    }

    return result.join("");
}

console.log(removeSpaces("geeks for geeks"));


function removeSpaces1(s) {

    let result = "";
    for(let i=0; i<s.length; i++) {
        if(s[i] != " ") {
            result += s[i]
        }
    }
    return result;
}


console.log(removeSpaces1("geeks for geeks"));
