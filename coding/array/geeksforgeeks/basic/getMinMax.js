function getMinMax(arr) {
    let max = Number.NEGATIVE_INFINITY;
    let min = Number.POSITIVE_INFINITY;

    for (let num of arr) {
        if (num < min) min = num;
        if (num > max) max = num;
    }
    return { min, max };
}

let arr = [3, 2, 1, 56, 10000, 167];
console.log(getMinMax(arr));
