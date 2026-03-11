function longestName(arr) {
    let result = "";
    let maxVar = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > maxVar) {
            maxVar = arr[i].length;
            result = arr[i];
        }
    }
    return result;
}

let arr1 = ["Apple", "Mango", "Orange", "Banana"];
console.log(longestName(arr1));
