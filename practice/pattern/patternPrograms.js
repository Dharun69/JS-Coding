// 1. right hand pyramid using *

const rows = 5;
let pattern = '';

for(let i = 1; i <= rows; i++) {    
    for(let j = 1; j <= i; j++) {
        pattern += "* ";
    }
    pattern += '\n';
}

console.log(pattern);


// 2. print numbers
// 1
// 12
// 123
// 1234
// 12345

for(let i = 1; i <= rows; i++) {    
    for(let j = 1; j <= i; j++) {
        pattern += j;
    }
    pattern += '\n';
}

console.log(pattern);


// 3. Left hand pyramid

for(let i = 1; i <= rows; i++) {    

    for(let j = 1; j <= rows - i; j++) {
        pattern += "  ";
    }

    for(let k = 1; k <= i; k++) {
        pattern += "* ";
    }
    pattern += '\n';
}

console.log(pattern);


// 4. print number left side

for(let i = 1; i <= rows; i++) {    

    for(let j = 1; j <= rows - i; j++) {
        pattern += "  ";
    }

    for(let k = 1; k <= i; k++) {
        pattern += k;
    }
    pattern += '\n';
}

console.log(pattern);


// 5. triangle star pattern

for(let i=0; i<= rows; i++) {

    let star = '';

    for(let j = 1; j <= (rows - i); j++) {
        star+= ' ';
    }

    for(let k=1; k<=i; k++) {
        star+= '* ';
    }
    console.log(star);
}


// 6. triangle with numbers

for(let i=0; i<=rows; i++) {

    let numbers = '';

    for(let j=1; j<=(rows-i); j++) {
        numbers += ' ';
    }

    for(let k=1; k<=i; k++) {
        numbers += k + ' ';
    }
    console.log(numbers);
}

