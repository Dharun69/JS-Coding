


function plaindromStr(str) {
    let rev = "";

    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }

    if (str === rev) {
        console.log("Plaindrome");
    } else {
        console.log("Not a Plaindrome");
    }

}

plaindromStr("madam");
plaindromStr("hello");


function plaindromStr1(str) {

    let left = 0;
    let right = str.length -1;

    while(left < right) {
        if(str[left] !== str[right]) {
            console.log("not plaindrome");
            return
        }

        left++
        right--
    }
    console.log("it's plaindrom");
    
}

plaindromStr1("madam");
plaindromStr1("hello");
