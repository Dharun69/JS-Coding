function rotateOne(arr) {
    let last = arr[arr.length - 1];

    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1]; // Take the value from the left neighbor and copy it into the current position.
    }

    arr[0] = last;
    return arr;
}

let arr = [1, 2, 3, 4, 5];

console.log(rotateOne(arr));
