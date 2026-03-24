function largestEle() {
    let arr = [1, 8, 7, 56, 90];
    let maxValue = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }
    console.log(maxValue);
}
largestEle();

function secondLargestNumber() {
    let arr = [4, 6, 8, 3, 9, 5];
    let max = -Infinity;
    let secondMax = -Infinity;

    // Find the maximum number in the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max; // Update secondMax with the previous max value
            max = arr[i]; // Update max with the new maximum value
        } else if (arr[i] > secondMax && arr[i] !== max) {
            secondMax = arr[i]; // Update secondMax if the current element is greater than the current secondMax
        }
    }

    console.log("Second largest number:", secondMax);
}

secondLargestNumber();

function minNum() {
    let min = [12, 5, 7, 8];
    let minValue = min[0];

    for (let i = 0; i < min.length; i++) {
        if (min[i] < minValue) {
            minValue = min[i];
        }
    }
    console.log(minValue);
}
minNum();
