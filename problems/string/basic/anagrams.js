function checkAnagramUsingSort() {

    let str1 = "listen";
    let str2 = "silent";

    let w1 = str1.toLowerCase().split("").sort().join("");
    let w2 = str2.toLowerCase().split("").sort().join("");

    if (w1 === w2) {
        console.log("Anagram");
    } else {
        console.log("Not Anagram");
    }
}

checkAnagramUsingSort();


function checkAnagramUsingMap() {

    let str1 = "listen";
    let str2 = "silent";

    let map = new Map();

    for (let ch of str1) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    for (let ch of str2) {
        if (!map.has(ch)) {
            console.log("Not Anagram");
            return;
        }

        map.set(ch, map.get(ch) - 1);
    }

    for (let [key, value] of map) {
        if (value !== 0) {
            console.log("Not Anagram");
            return;
        }
    }

    console.log("Anagram");
}

checkAnagramUsingMap();

