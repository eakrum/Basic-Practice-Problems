/*

    WRITE A FUNCTION THAT TAKES IN A STRING, AND THE NUMBER OF TIMES U WANT TO REPEAT IT. AND THEN RETURN THE 
    STRING THATS REPEATED X TIMES
    
    AKA 

    repeatString('abc', 3) should return abcabcabc


*/

function repeatString(str, num) {
    let repeatedStr =""
    for(let i= 0; i< num; i++){
        repeatedStr += str
    }

    return repeatedStr
}

console.log(repeatString("*", 4));
