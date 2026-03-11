



    function increasingAndDecresing(n) {
        for (let row = 1; row <= n; row++) {
            let noOfSpace = n - row;
            for (let s = 1; s <= noOfSpace; s++) {
                process.stdout.write(" ");
            }
            for (let col = 1; col <= row; col++) {
                process.stdout.write("* ");
            }
            console.log();
        }

        for (let row = n; row >= 1; row--) {
            let noOfSpace = n - row;
            for (let s = 1; s <= noOfSpace; s++) {
                process.stdout.write(" ");
            }
            for (let col = 1; col <= row; col++) {
                process.stdout.write("* ");
            }
            console.log();
        }
    }

    increasingAndDecresing(5);


    function increasingAndDecresing1(n) {
        
        for(let row=1; row<=n; row++) {
            for(let col=1; col<=row; col++) {
                process.stdout.write("*");
            }
            console.log();
        }
        
        for(let row=n; row>=0; row--) {
            for(let col=1; col<row; col++) {
                 process.stdout.write("*");
            }
             console.log();
        }
    }

    increasingAndDecresing1(5);