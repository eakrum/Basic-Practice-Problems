/*

FIND THE LONGEST WORD IN A SENTENCE

*/

function findLongestWord(str) {
  let words = str.split(" ");
  let longest = "";

  for (let i = 0; i < words.length; i++) {
    if (longest.length < words[i].length) {
      longest = words[i];
    }
  }

  return longest;
}

console.log(
  findLongestWord(
    "Coding is not just spamming the keyboard, its about taking the time to understand the problem and coming to a reasonable well thought conclusion"
  )
);
