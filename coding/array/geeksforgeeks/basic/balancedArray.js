function balancedArray(arr) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        sum1 += arr[i];
    }
    for (let i = Math.floor(arr.length / 2); i < arr.length; i++) {
        sum2 += arr[i];
    }
    let result = sum1 - sum2;
    return Math.abs(result);
}

let arr = [1, 5, 3, 2];
console.log(balancedArray(arr));
