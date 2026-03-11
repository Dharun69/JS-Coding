// Maximum and minimum of an array using minimum number of comparisons

function findMinMax(arr) {

    if(arr.lenth === 0) {
        return "Array is empty";
    }
    return { max : Math.max(...arr), min : Math.min(...arr) };
}

var array = [4, 2, 7, 1, 9, 3];
var result = findMinMax(array);
console.log("Maximum :", result.max); // Output: Maximum: 9
console.log("Minimum :", result.min); // Output: Minimum: 1
