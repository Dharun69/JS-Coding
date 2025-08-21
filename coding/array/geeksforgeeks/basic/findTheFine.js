function totalFine(date, car, fine) {
    let result = 0;

    for (let i = 0; i < car.length; i++) {
        let lastDigit = car[i] % 10;
        if ((date % 2 === 0 && lastDigit % 2 !== 0) || (date % 2 !== 0 && lastDigit % 2 === 0)) {
            result += fine[i];
        }
    }
    return result;
}

let date = 12;
let car = [2375, 7682, 2325, 2352];
let fine = [250, 500, 350, 200];
console.log(totalFine(date, car, fine));
