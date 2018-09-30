/*

WRITE A FUNCTION THAT CHECKS IF A STRING IS A PALINDROME.

*/

function palindrome(str) {
  let string = str.toLowerCase();
  let strArr = string.split("");
  let reversedArr = [];
  let reversedString;

  for (let i = strArr.length - 1; i >= 0; i--) {
    reversedArr.push(strArr[i]);
  }

  reversedString = reversedArr.join("");
  if (string === reversedString) return true;
  return false;
}

console.log(palindrome("RaceCARs"));
