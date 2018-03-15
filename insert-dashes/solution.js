function insertDash(num) {
  //code me
  let flag = false;
  let numArray = num.toString().split('');
  let answer = [];
  for (let i = 0; i < numArray.length; i ++) {
    let compare = parseInt(numArray[i]);
    if (compare % 2 === 0) {
      flag = false
      answer.push(numArray[i]);
    } else if (compare % 2 === 1) {
      if (flag === true) {
        answer.push('-');
        answer.push(numArray[i]);
      } else {
        flag = true;
        answer.push(numArray[i]);
      }
    }
  }
  return answer.join('');
}
