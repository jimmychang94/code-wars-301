function find_average(array) {
  // your code here
  return array.reduce((acc, cur) => (acc + cur))/array.length;
}