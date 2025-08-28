function alternateSort(arr) {
    let result = [];
    arr.sort((a, b) => a - b);
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        result.push(arr[right]);
        right--;
        if (left <= right) {
            result.push(arr[left]);
            left++;
        }
    }
    return result;
}

let arr = [7, 1, 2, 3, 4, 5, 6];
console.log(alternateSort(arr));
