


function checkOnlyDigits(str) {

    for(let i=0; i<str.length; i++) {
        let ch = str[i];

        if(ch < "0" || ch > "9" ) {
            return false
        } 
    }

    return true
}


console.log(checkOnlyDigits("q1234"));
