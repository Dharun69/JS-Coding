// 6. Unique Triplets program -> to find unique triplets in an array that sum up to a given target

function findTriplets(nums, target) {
    
    // Initialize an empty array to store triplets
    const triplets = [];
    // Sort the input array in ascending order
    nums.sort((a, b) => a - b);

    // Iterate through the array up to the third last element
    for (let i = 0; i < nums.length - 2; i++) {
        // Iterate through the array starting from the next element after i
        for (let j = i + 1; j < nums.length - 1; j++) {
            // Iterate through the array starting from the next element after j
            for (let k = j + 1; k < nums.length; k++) {
                // Check if the sum of the current triplet equals the target
                if (nums[i] + nums[j] + nums[k] === target) {
                    // If so, add the triplet to the triplets array
                    triplets.push([nums[i], nums[j], nums[k]]);
                }
            }
        }
    }

    // Return the array containing all the triplets
    return triplets;
}

const nums = [-1, 0, 1, 2, -1, -4];
const target = 0;
const result = findTriplets(nums, target);
console.log(result); // Output: [ [-1, -1, 2], [-1, 0, 1] ]




function findTriplets1(nums, target) {
    const result = [];
    nums.sort((a, b) => a - b); // REQUIRED here

    for (let i = 0; i < nums.length - 2; i++) {

        // skip duplicates
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === target) {
                result.push([nums[i], nums[left], nums[right]]);

                // skip duplicates
                while (nums[left] === nums[left + 1]) left++;
                while (nums[right] === nums[right - 1]) right--;

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
    }

    return result;
}


const result1 = findTriplets1(nums, target);
console.log(result1); // Output: [ [-1, -1, 2], [-1, 0, 1] ]
