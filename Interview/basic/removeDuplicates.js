

function removeDuplicates(arr) {    
    let uniqueElements = new Set(arr);  
    return Array.from(uniqueElements);  
    // Alternatively, you can use the spread operator:
    // return [...uniqueElements];
}

// Example usage:
const arr = [1, 2, 3, 2, 4, 1, 5];
console.log(removeDuplicates(arr)); // Output: [1, 2, 3, 4, 5]  


function removeDuplicates1(arr) {
    let uniqueElements = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueElements.includes(arr[i])) {
            uniqueElements.push(arr[i]);
        }
    }
    return uniqueElements;
}

// Example usage:
const arr1 = [1, 2, 3, 2, 4, 1, 5];
console.log(removeDuplicates1(arr1)); // Output: [1, 2, 3, 4, 5]