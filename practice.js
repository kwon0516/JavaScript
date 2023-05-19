'use strict';

const split = function(str, sep) {
    const strLength = str.length;
    let strResult = "";

    for (let i = 0; i != strLength; i++) {
        if (str[i] !== sep)
        strResult += str[i];
    }

    return strResult;
}

const replace = function(str, before, after) {
    const strLength = str.length;
    let strResult = "";

    for (let i = 0; i != strLength; i++) {
        if (str[i] !== before) {
            strResult += str[i]
        }
        else if (str[i] === before) {
            strResult += after;
        }
    }
    
    return strResult;
}

let splitWord = split("H,EL,LO WOR,L,D!", ",");

console.log(splitWord);

let replaceWord = replace("H,EL,LO WOR,L,D!", ",", "!");

console.log(replaceWord);