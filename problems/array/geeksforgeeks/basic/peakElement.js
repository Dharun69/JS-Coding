


function findPeakElement(arr) {
    for (let i = 0; i < arr.length; i++) {
        if ((i === 0 || arr[i] > arr[i - 1]) && (i === arr.length - 1 || arr[i] > arr[i + 1])) {
            return i;
        }
    }
}


const arr = [1, 2, 4, 5, 7, 8, 3];
const index = findPeakElement(arr);
console.log(index); 
