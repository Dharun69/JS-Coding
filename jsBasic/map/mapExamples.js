// 1. set(key, value) → add or update

let map = new Map();
map.set("name", "Dharun");
map.set("age", 25);
console.log(map);
// Map(2) { 'name' => 'Dharun', 'age' => 25 }

// 2. get(key) → retrieve value by key
console.log(map.get("name")); // Dharun
console.log(map.get("city")); // undefined

// 3. has(key) → check if key exists
console.log(map.has("age")); // true
console.log(map.has("salary")); // false

// 4. delete(key) → remove a key-value pair
map.delete("age");
console.log(map);
// Map(1) { 'name' => 'Dharun' }

//5. clear() → remove everything
map.clear();
console.log(map.size); // 0

//6. size → number of entries
let fruits = new Map();
fruits.set("apple", 10);
fruits.set("banana", 20);
console.log(fruits.size); // 2

//7. keys() → get all keys (iterator)
for (let key of fruits.keys()) {
    console.log(key);
}
// apple
// banana

//8. values() → get all values
for (let value of fruits.values()) {
    console.log(value);
}
// 10
// 20

// 9. entries() → get [key, value] pairs
for (let [key, value] of fruits.entries()) {
    console.log(key, value);
}
// apple 10
// banana 20

//10. forEach(callback) → loop over map
fruits.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
// apple: 10
// banana: 20
