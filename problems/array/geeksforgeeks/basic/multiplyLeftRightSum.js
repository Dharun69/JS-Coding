function multiply(arr) {
    let sum1 = 0;
    let sum2 = 0;
    let n = arr.length;
    for (let i = 0; i < Math.ceil(n / 2); i++) {
        sum1 += arr[i];
    }
    for (let i = Math.ceil(n / 2); i < n; i++) {
        sum2 += arr[i];
    }
    return sum1 * sum2;
}
let arr = [1, 2, 3, 4, 5];

console.log(multiply(arr));
