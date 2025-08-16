function reverseNum(num) {
    let result = 0;
    while (num != 0) {
        let rem = num % 10;
        result = result * 10 + rem;
        num = Math.floor(num/10);
    }
    console.log(result);
}

reverseNum("1234");
