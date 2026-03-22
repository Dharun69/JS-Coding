// Given two strings of lowercase alphabets and a value k, the task is to find if two strings are K-anagrams of each other or not.
// Two strings are called k-anagrams if following two conditions are true.
// Both have same number of characters.
// Two strings can become anagram by changing at most k characters in a string.

// Examples :

// Input:  str1 = "anagram" , str2 = "grammar" , k = 3
// Output:  Yes
// Explanation: We can update maximum 3 values and 
// it can be done in changing only 'r' to 'n' 
// and 'm' to 'a' in str2.

// Input:  str1 = "geeks", str2 = "eggkf", k = 1
// Output:  No
// Explanation: We can update or modify only 1 
// value but there is a need of modifying 2 characters. 
// i.e. g and f in str 2.

function areKAnagrams(str1, str2, k){

    if(str1.length !== str2.length){
        return "No";
    }

    let map = new Map();

    // count characters of str1
    for(let ch of str1){
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    // reduce count using str2
    for(let ch of str2){
        if(map.has(ch) && map.get(ch) > 0){
            map.set(ch, map.get(ch) - 1);
        }
    }

    // count remaining characters
    let changes = 0;

    for(let value of map.values()){
        changes += value;
    }

    if(changes <= k){
        return "Yes";
    } else {
        return "No";
    }
}

console.log(areKAnagrams("anagram","grammar",3));
console.log(areKAnagrams("geeks","eggkf",1));