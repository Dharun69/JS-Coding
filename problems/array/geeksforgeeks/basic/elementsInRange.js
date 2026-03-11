function checkElements(arr, n, A, B) {
    let numbers = [];
    for (let i = A; i <= B; i++) {
        numbers.push(i);
    }
    for (let i = 0; i < numbers.length; i++) {
        if (!arr.includes(numbers[i])) {
            return false;
        }
    }
    return true;
}

let arr = [1, 4, 5, 2, 7, 8, 3];
let n = 7,
    A = 2,
    B = 5;

console.log(checkElements(arr, n, A, B));
