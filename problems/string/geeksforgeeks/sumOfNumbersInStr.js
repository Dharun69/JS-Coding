function sumOfNumInStr(s) {
    let sum = 0;
    let tempNum = "";

    for (let i = 0; i <= s.length; i++) {
        let ch = s[i];

        if (!isNaN(ch)) {
            tempNum += ch;
        } else {
            if(tempNum.length > 0){
                sum += parseInt(tempNum);
                tempNum = ""
            }
        }

    }
    return sum;
}

console.log(sumOfNumInStr("1abc23"));
