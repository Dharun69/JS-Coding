

// add all numbers in string
 
function addAllNumbers(str) {
    let sum = 0;
    for (let ch of str) {
        if (ch >= '0' && ch <= '9') {
            sum += parseInt(ch);
        }
    }
    return sum;
}


let str = "dh47dg6jd39jefh8df";
console.log(addAllNumbers(str));



function addAllNumbers1(str) {
    
    let sum = 0;
    let matches = str.match(/\d+/g);

    if(matches) {
        for (let num of matches) {
            sum += parseInt(num);   
        }
    }
    return sum;
}

console.log(addAllNumbers1(str));


