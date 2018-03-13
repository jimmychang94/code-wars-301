function abbrevName(name){
  // code away
  let nameArray = name.split(' ');
  const answer = [];
  for (let i = 0; i < nameArray.length; i ++) {
    answer.push(nameArray[i].charAt(0));
  }
  return answer.join('.').toUpperCase();
}