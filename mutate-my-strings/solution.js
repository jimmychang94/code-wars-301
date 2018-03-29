function mutateMyStrings(stringOne, stringTwo){
  let answer = [];
  let stringOneArr = stringOne.split('');
  let stringTwoArr = stringTwo.split('');
  answer.push(`${stringOne}\n`);
  stringOneArr.map((x, i) => {
    if (stringOneArr[i] !== stringTwoArr[i]) {
      answer.push(`${stringTwoArr.slice(0, i + 1).concat(stringOneArr.slice(i + 1)).join('')}\n`);
    }
  })
  return answer.join('');
}