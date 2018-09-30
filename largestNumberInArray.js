/*

    Return the largest numbers in a 2D array

    aka

    [[5,42,54], [10,14,60], [1001,1000,309]] 

    should return 

    [54,60,1001]


*/

function findLargest(arr) {
  let maxArr = [];
  for (let i = 0; i < arr.length; i++) {
    currMax = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      let currElement = arr[i][j];
      if (currElement >= currMax) {
        currMax = currElement;
      }
    }
    maxArr.push(currMax);
  }

  return maxArr;
}

console.log(findLargest([[5, 42, 54], [10, 14, 60], [1001, 1000, 309]]));
