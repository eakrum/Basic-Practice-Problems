/*

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17. 

*/

function addition(arr, k) {
  let sums = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      sums.push(arr[i] + arr[j]);
    }
  }

  for (let i=0; i<sums.length;i++){
      if (sums[i]===k){
          return true
      }
  }
  


  return false

}

console.log(addition([10, 15, 3, 7], 17));
