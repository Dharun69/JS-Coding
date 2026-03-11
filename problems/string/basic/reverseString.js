


function reverseStr(str) {

    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i]
    }
    console.log(rev);
}

reverseStr("dharun")

function reverseStr1(str) {

    let arr = str.split("");
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp
        left++;
        right--;
    }
    return arr.join("");
}

console.log(reverseStr1("dharun"));
