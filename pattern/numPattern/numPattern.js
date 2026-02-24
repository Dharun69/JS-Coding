// 1
// 12
// 123
// 1234
// 12345

function printNumberPattern(n) {
    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= row; col++) {
            process.stdout.write(col.toString());
        }
        console.log();
    }
}

printNumberPattern(5);


