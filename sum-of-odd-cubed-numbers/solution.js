function cubeOdd(arr) {
  // This checks to see if the array is all even numbers and returns 0.
  if (arr.every(x => x%2 === 0)) return 0;
  // The following 2 lines is prep for checking if the array has values that are not numbers.
  let array = [];
  arr.forEach(x => array.push(typeof x !== 'number'));
  // This is an if statement that checks to see if there are values that are not numbers in the array; if there is, return undefined. If there isn't, then it returns the sum of all odd numbers cubed.
  // Filter finds all odd numbers, map cubes the array, reduce sums the array.
  return (array.includes(true)) ? undefined : arr.filter(x => x & 1).map(x => x * x * x).reduce((a, b) => a + b);
  
  }