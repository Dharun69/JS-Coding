function insertAtIndex(arr, index, val) {
    arr.splice(index, 0, val);
    console.log(arr);
}
let arr = [1, 2, 3, 4, 5];
let index = 2;
let val = 90;
insertAtIndex(arr, index, val);