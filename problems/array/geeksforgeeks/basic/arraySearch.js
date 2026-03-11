function arraySearch(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return i;
        }
    }
    return -1;
}
let arr = [10, 8, 30, 4, 5];
let x = 5;
console.log(arraySearch(arr, x));
