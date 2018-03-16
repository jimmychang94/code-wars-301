function capitalize(s){
  // This sets variables which will be put into the left and right part of the answer array
  const left = [];
  const right = [];
  // This splits the string into an array of all the characters
  let sArray = s.split('');
  // This for loop goes through every value in the array
  for (let i = 0; i < sArray.length; i ++) {
    // This checks to see if i is an even number; if it is left gets the character pushed into it as uppercase while the right gets it as lowercase
    if (i % 2 === 0) {
      left.push(sArray[i].toUpperCase());
      right.push(sArray[i]);
    // Since this means that i is an odd number; left gets the character pushed into it as lowercase while right gets it as uppercase
    } else {
      left.push(sArray[i]);
      right.push(sArray[i].toUpperCase());
    }
  }
  // This returns the left array and right array after we join the arrays into a string
  return [left.join(''), right.join('')];
};