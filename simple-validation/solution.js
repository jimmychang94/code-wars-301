function validateUsr(username) {
  // This first checks to make sure that the first value either lowercase, a number, or underscore
  // Then it checks if matches 4-16 times
  // Then it checks if the last value that is matched is either lowercase, a number, or underscore
  res =  /^[a-z\d_]{4,16}$/.test(username); //regex here/.test(username) 
  return res
}