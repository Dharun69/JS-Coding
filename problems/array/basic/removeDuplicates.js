// javascript program to remove the duplicates from the given array 

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

const originalArray = [1, 2, 3, 4, 4, 5, 6, 6];
const uniqueArray = removeDuplicates(originalArray);
console.log(uniqueArray);

// Output: [1, 2, 3, 4, 5, 6


function removeDuplicates1(arr) {
    let result = [];

    for(let i=0; i<arr.length; i++) {
        if(!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    console.log(result);
    

}

removeDuplicates1([1, 2, 3, 4, 4, 5, 6, 6]);
