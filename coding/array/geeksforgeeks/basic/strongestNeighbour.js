function maxAdj(arr) {
    let result = [];
    for (let i = 0; i < arr.length - 1; i++) {
        let maxValue = Math.max(arr[i], arr[i + 1]);
        result.push(maxValue);
    }
    return result;
}
let arr = [1, 2, 2, 3, 4, 5];
console.log(maxAdj(arr));
