


function ascendingSort(arr) {
    return arr.sort((a, b) => a - b);
}

function descendingSort(arr) {
    return arr.sort((a, b) => b - a);
}

let arr = [5, 2, 9, 1, 5, 6];
console.log(ascendingSort(arr)); // Output: [1, 2, 5, 5, 6, 9]
console.log(descendingSort(arr)); // Output: [9, 6, 5, 5, 2, 1] 


// ascending sort without using built-in sort
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort(arr)); // Output: [1, 2, 5, 5, 6, 9]

// descending sort without using built-in sort
function bubbleSortDescending(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSortDescending(arr)); // Output: [9, 6, 5, 5, 2, 1]   