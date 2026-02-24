/**
 * Given an array of integers arr[], the task is to find the first equilibrium point in the array.

The equilibrium point in an array is an index (0-based indexing) such that the sum of all elements before that index is the same as the sum of elements after it. Return -1 if no such point exists. 

Examples:

Input: arr[] = [1, 2, 0, 3]
Output: 2 
Explanation: The sum of left of index 2 is 1 + 2 = 3 and sum on right of index 2 is 3.
 */

function findEquilibrium(arr) {
    let totalSum = 0;
    for (let i = 0; i < arr.length; i++) {
        totalSum += arr[i];
    }
    let leftSum = 0;
    for (let j = 0; j < arr.length; j++) {
        let rightSum = totalSum - leftSum - arr[j];
        if (leftSum === rightSum) {
            return j;
        }
        leftSum += arr[j];
    }
    return -1;
}
let arr = [1, 2, 0, 3];
console.log(findEquilibrium(arr));
