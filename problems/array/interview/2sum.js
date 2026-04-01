function twoSum(arr, target) {

    let left = 0;
    let right = arr.length - 1;
    let result = [];

    arr.sort((a, b) => a - b);
    while (left < right) {

        let sum = arr[left] + arr[right];

        if (sum === target) {
            result.push([arr[left], arr[right]]);
            while (arr[left] === arr[left + 1]) left++;
            while (arr[right] === arr[right - 1]) right--;
            left++;
            right--;
        }
        else if (sum < target) {
            left++;
        } 
        else {
            right--;
        }        
    }

    console.log(result);
}

let arr = [3, 4, 5, 2, 6, 8];
let target = 10;
twoSum(arr, target);