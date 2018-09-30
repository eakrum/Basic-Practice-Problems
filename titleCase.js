/*

Capitalize the first letter of every sentence

*/

function titleCase(str) {
  let words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

console.log(titleCase("hello jon fishkin is a feg and an advanced cheater"));
