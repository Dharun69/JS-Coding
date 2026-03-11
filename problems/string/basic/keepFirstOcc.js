


function keepFirstOcc(str) {

    let seen = new Set();
    // let result = "";

    for (let ch of str) {
        if (!seen.has(ch)) {
            seen.add(ch);
            // result += ch;
        }
    }

    console.log(seen);
    console.log([...seen].join(""));

}


keepFirstOcc("programming")



function keepFirstOcc1(str) {
    let map = new Map();
    let result = "";
    for (let ch of str) {
        if (!map.has(ch)) {
            map.set(ch, true);
            result += ch;
        }
    }
    console.log([...map.keys()].join(""));
    console.log(result);
}

keepFirstOcc1("programming");





function keepFirstOcc2(str) {
    let result = "";

    for (let ch of str) {
        if (!result.includes(ch)) {
            result += ch;
        }
    }
    console.log(result);


}

keepFirstOcc2("programming");