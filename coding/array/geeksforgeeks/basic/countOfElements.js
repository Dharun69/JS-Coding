function countOfElements(x, arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= x) {
            count++;
        }
    }
    console.log(count);
}
let x = 9;
let arr = [10, 1, 2, 8, 4, 5];
countOfElements(x, arr);
