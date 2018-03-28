function high(x){
  let abc = 'abcdefghijklmnopqrstuvwxyz';
  let matchArr = [];
  x.split(' ').forEach(val => {
    let sum = 0;
    for (let i = 0; i < val.length; i ++) {
      sum += abc.indexOf(val[i]) + 1;
    }
    matchArr.push(sum);
  })
  return x.split(' ')[matchArr.indexOf(Math.max(...matchArr))];
}