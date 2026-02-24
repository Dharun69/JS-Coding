// Input: s1 = “geeks”  s2 = “kseeg”
// Output: true
// Explanation: Both the string have same characters with same frequency. So, they are anagrams.

function isAnagram(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    const arr1 = str1.split("").filter(char => char !== " ");
    const arr2 = str2.split("").filter(char => char !== " ");

    if (arr1.length !== arr2.length) {
        console.log(false);
        return false;
    }
    const sortedStr1 = arr1.sort().join("");
    const sortedStr2 = arr2.sort().join("");

    const result = sortedStr1 === sortedStr2;
    console.log(result);
    return result;
}

isAnagram("geeks", "kseeg");  
isAnagram("Hello", "oellh");  
isAnagram("Test", "Tast");    
isAnagram("race", "care ");  

