function fixTheMeerkat(arr) {
  // your code here
  let head = arr[2];
  arr[2] = arr[0];
  arr[0] = head;
  return arr;
 }