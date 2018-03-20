function isNice(arr){
  let count = 0;
  if (arr.length === 0) {
    return false;
  }
  for (let i = 0; i < arr.length; i ++) {
    for (let j = 0; j < arr.length; j ++) {
      if (arr[i] === arr[j] + 1 || arr[i] === arr[j] - 1) {
        count += 1;
        j = arr.length;
      }
    }
  }
  return (count < arr.length) ? false : true;
}