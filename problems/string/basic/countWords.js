

function countWords() {
    let str = "The quick brown fox";

    let w = str.split(" ");
    return w.length;
}

console.log(countWords());



function countWords1() {

        let str = "The quick brown fox";
        let count =0;
        for(let i=0; i<str.length; i++) {
            if(str[i] !== " " && (i === 0||(str[i-1])=== " ")) {
                count++;
            }
        }
        console.log(count);
}

countWords1();