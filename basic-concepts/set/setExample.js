//1. add(value) → add a value
let set = new Set();
set.add("apple");
set.add("banana");
set.add("apple"); // duplicate ignored
console.log(set);
// Set(2) { 'apple', 'banana' }

//2. has(value) → check if a value exists
console.log(set.has("apple")); // true
console.log(set.has("mango")); // false

//3. delete(value) → remove a value
set.delete("banana");
console.log(set);
// Set(1) { 'apple' }

//4. clear() → remove everything
set.clear();
console.log(set.size); // 0

//5. size → number of values
let numbers = new Set([1, 2, 3, 3, 4]);
console.log(numbers.size); // 4 (duplicates removed)

//6. keys() → returns values (same as values)
for (let key of numbers.keys()) {
    console.log(key);
}
// 1
// 2
// 3
// 4

//7. values() → get all values
for (let value of numbers.values()) {
    console.log(value);
}
// 1
// 2
// 3
// 4

//8. entries() → [value, value] pairs (for compatibility with Map)
for (let [key, value] of numbers.entries()) {
    console.log(key, value);
}
// 1 1
// 2 2
// 3 3
// 4 4

//9. forEach(callback) → loop over set
numbers.forEach((value) => {
    console.log(value);
});
// 1
// 2
// 3
// 4    
