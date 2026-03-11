


function firstRepeatingCh() {
    let str = "programming";

    let set = new Set();


    for(let ch of str) {
        if(set.has(ch)){
            return ch;
        }
        set.add(ch);
    }
}


console.log(firstRepeatingCh());
