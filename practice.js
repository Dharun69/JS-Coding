function findElements(arr) {

    let min = Infinity;
    let secondMin = Infinity;

    let max = -Infinity;
    let secondMax = -Infinity;

    for(let num of arr) {
        if(num < min) {
            secondMin = min;
            min = num;
        } else if(num < secondMin && min != num) {
            secondMin = num
        }
        if(num > max) {
            secondMax = max;
            max = num;
        } else if(num > secondMax && num !== max) {
            secondMax = num;
        }
    }

    console.log("min :" + min);
    console.log("secondMin :" + secondMin);
    
    console.log("max :" + max);
    console.log("secondMax :" + secondMax);
    
}

let arr = [5, 2, 9, 1, 7, 3];
findElements(arr);