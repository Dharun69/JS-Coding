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
