/*

    Write a function that takes in a string and a target word, return true if the last letter of the string
    is the same as the last letter of the target. If they are not equal, return false.

*/

function confirmEnding(str, target) {
  let strLetters = str.split("");
  let targetLetters = target.split("");
  let lastStrLetter = strLetters[strLetters.length - 1];
  let lastTargetLetter = targetLetters[targetLetters.length - 1];
  if (lastStrLetter === lastTargetLetter) {
    return true;
  }

  return false;
}

console.log(confirmEnding("hello this is my test case", "ease"));
