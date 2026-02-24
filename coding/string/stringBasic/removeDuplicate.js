function removeDuplicate() {
    let str = "geeksforgeeks";
    let unquie = "";

    for (let i = 0; i <= str.length - 1; i++) {
        if (!unquie.includes(str[i])) {
            unquie = unquie + str[i];
        }
    }
    console.log(unquie);
}
removeDuplicate();


