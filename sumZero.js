
//Given an array of integers, find if a consecutive series of that array that sums to zero exists



let arr = [1, 0, 4, 8];

function sumZero(list) {
  let sum;
  let firstNum;
  let secondNum;

  for (let i = 0; i < list.length; i++) {
    firstNum = list[i];
    secondNum = list[i + 1];
    if(firstNum + secondNum == 0){
        return `${firstNum} + ${secondNum} = 0`
    }


  }

  return 'No Numbers = 0'
}

console.log(sumZero(arr));