function chocolates(arr) {
    let first = 0;
    let last = arr.length - 1;

    while (first < last) {
        if (arr[first] > arr[last]) {
            first++;
        } else {
            last--;
        }
    }

    return arr[first];
}

let arr = [5, 9, 2, 6];
console.log(chocolates(arr));
