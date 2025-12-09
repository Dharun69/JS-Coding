class Solution {
    leaders(arr) {
        let result = [];
        let maxRight = -Infinity;
        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] >= maxRight) {
                result.push(arr[i]);
                maxRight = arr[i];
            }
        }
        return result.reverse();
    }
}

// Example usage:
let sol = new Solution();
let arr = [16, 17, 4, 3, 5, 2];

console.log(sol.leaders(arr)); // Output: [17, 5, 2]

// 👉 Instead of pushing at the end,
// 👉 You insert each leader at the front using unshift().
// So the order becomes correct automatically.
//  result.unshift(arr[i]);
