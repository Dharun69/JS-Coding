


function removeSpace() {

    let str = "hello world test";
    let result = "";

    for(let i=0; i<str.length; i++) {
        if(str[i] !== " ") {
            result += str[i];
        }
    }

    console.log(result);

}

removeSpace();


function removeSpace1() {

    let str = "hello world test";

    let result = str.replaceAll(" ", "");
    console.log(result);
    
}

removeSpace1();