function isPalinArray(arr) {
    for (let num of arr) {
        let str = num.toString();
        let reversed = str.split("").reverse().join("");
        if (parseInt(reversed) === num) {
            continue;
        } else return false;
    }
    return true;
}
let arr = [111, 2212, 333, 444, 555];
console.log(isPalinArray(arr));
