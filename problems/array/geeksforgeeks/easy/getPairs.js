function getPairs(arr) {
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }
    return pairs;
}
let arr = [2, -3, 3, 4, -2, -4, 5, -5];
console.log(getPairs(arr));
