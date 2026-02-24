// remove duplicates from the array
let arr = [4, 6, 2, 3, 1, 1, 3, 5, 7, 8, 4, 3];

let dup = arr.filter((value, index, arr) => {
    return arr.indexOf(value) === index;
});

console.log(dup);

// abbreviate by gathering first letter of each word
let word = "Robert Andrew George";

let result = word
    .split(" ")
    .map((word) => word[0])
    .join("");
console.log(result); // Output: "RAG"

let input = [6, -5, 7, -2, 4, 6, -1];
let sumOfPositiveNumbers = input.reduce((sum, num) => {
    if (num > 0) {
        return sum + num;
    }
    return sum;
}, 0);
console.log(sumOfPositiveNumbers);
