/*

WRITE A FUNCTION TO REVERSE A STRING

*/

function reverseString(str) {
  let strArr = str.split("");
  let reversedString;
  let reversedArr = [];

  for (let i = strArr.length - 1; i >= 0; i--) {
    reversedArr.push(strArr[i]);
  }
  reversedString = reversedArr.join("");
  return reversedString;
}

console.log(reverseString("hello"));
