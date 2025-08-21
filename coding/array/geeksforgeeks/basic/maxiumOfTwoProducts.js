function maxProduct(arr) {
    let first = 0,
        second = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second) {
            second = arr[i];
        }
    }
    return first * second;
}
let arr = [1, 4, 3, 6, 7, 0];
console.log(maxProduct(arr));
