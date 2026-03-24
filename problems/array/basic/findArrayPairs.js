// in a set of array the target is 10, find the pairs of array
function findPairs(array, target) {
  const pairs = [];

  // Use a Set to store already visited numbers
  const visitedNumbers = new Set();

  for (let num of array) {
    const complement = target - num;

    if (visitedNumbers.has(complement)) {
      pairs.push([num, complement]);
    }

    visitedNumbers.add(num);
  }

  return pairs;
}

const array = [3, 4, 5, 2, 6, 8];
const target = 10;

const result = findPairs(array, target);
console.log(result);


function findPairs1(array, target) {
  const pairs = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        pairs.push([array[i], array[j]]);
      }
    }
  }

  return pairs;
}

const array1 = [3, 4, 5, 2, 6, 8];
const target1 = 10;

const result1 = findPairs1(array1, target1);
console.log(result1);