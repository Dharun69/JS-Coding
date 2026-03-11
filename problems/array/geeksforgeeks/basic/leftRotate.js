function leftRotate(arr, k) {
    let count = 0;
    k = k % arr.length;
    while (count < k) {
        let firstElement = arr[0];
        for (let i = 0; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr[arr.length - 1] = firstElement;
        count++;
    }
    return arr;
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 2;
console.log(leftRotate(arr, k));
