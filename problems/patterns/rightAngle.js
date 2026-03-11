



function rightAngle(n) {


    for (let row = 1; row <= n; row++) {
        let noOfSpace = n - row;
        for (let s = 1; s <= noOfSpace; s++) {
            process.stdout.write(" ");
        }
        for (let col = 1; col <= row; col++) {
            process.stdout.write("*");
        }
        console.log();
    }

}

rightAngle(5);