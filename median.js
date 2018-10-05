function mean(arr) {
  let divisor = arr.length;
  let sum =0;;
  let mean;

  for (let i = 0; i < divisor; i++) {
    sum += arr[i];
  }

  mean = sum / divisor;
  return mean
}

function median(arr) {
  let length = arr.length;
  let median = 0;
  let sortedArr = arr.sort();

  if (length % 2 === 0) {
    median = (sortedArr[length / 2 - 1] + sortedArr[length / 2]) / 2;
    return median;
  } else {
    let oddLength = length - 1;
    median = sortedArr[oddLength / 2];
    return median;
  }
}

console.log(median([1, 3, 2, 5, 4]));

console.log(mean)
