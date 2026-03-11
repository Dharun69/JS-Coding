function starPattern(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            process.stdout.write("* ");
        }
        console.log();
    }

    for (let i = n; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            process.stdout.write("* ");
        }
        console.log();
    }

    for (let i = 0; i < n; i++) {
        for (let s = 0; s < n - i - 1; s++) {
            process.stdout.write(" ");
        }
        for (let j = 0; j <= i; j++) {
            process.stdout.write("*");
        }
        console.log();
    }
}

starPattern(5);
