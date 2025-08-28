function checkAge(age){
    if(age>18){
        console.log("You are old enough to vote");
    } else{
        console.log("you are not");
    }
}


checkAge(19);


function checkNumber(num){
    if(num>0){
        console.log("postive num")
    }else{
        console.log('negative')
    }
}
checkNumber(-4)


let browser = 'chrome';
if(browser == 'chrome'){
    console.log('chrome');
} else if(browser == 'edge'){
    console.log('edge');
}else {
    console.log('plz pass right browser')
}
 //because else block is associated with last if block so it's been triggered better to go with switch
// if we use else in edge only chrome will print
// so else is assioated with previous if block
// so if we want to run the edge it will check all the previous if condition

function checkDaysOfWeek(dayNum){
    let day;
    switch(dayNum){
        case 0:
            day = "mon";
            break;
        case 1:
            day = "tue";
            break;  
            default:
                console.log('invaild');
                break;  
    }
    return day;
}
console.log(checkDaysOfWeek(4));




