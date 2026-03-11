


function nonRepeatingch(str) {

    for (let i = 0; i < str.length; i++) {
        let count = 0;
        for (let j = 0; j < str.length; j++) {

            if (str[i] === str[j]) {
                count++;
            }
        }
        if (count === 1) {
            console.log(str[i]);
            break

        }
    }

}


function nonRepeatingFirstch(str) {

    let map = new Map();

    for (let ch of str) {
        map.set(ch, (map.get(ch) || 0) + 1)
    }
    console.log(map);

    for (let ch of str) {
        if (map.get(ch) === 1) {
            console.log(ch);
            break;
        }
    }
}


nonRepeatingch("automation");
nonRepeatingFirstch("automation");