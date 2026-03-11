

function hasDuplicate(str) {

    let map = new Map();

    for (let ch of str) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    for (let value of map.values()) {
        if (value > 1) {
            return true;
        }
    }

    return false;
}

console.log(hasDuplicate("hello")); // true
console.log(hasDuplicate("abcde")); // false


function hasDuplicate1(str) {

    let set = new Set();

    for (let ch of str) {
        if (set.has(ch)) {
            return true;
        }
        set.add(ch);
    }

    return false;
}

console.log(hasDuplicate1("hello"));
console.log(hasDuplicate1("abcde"));

