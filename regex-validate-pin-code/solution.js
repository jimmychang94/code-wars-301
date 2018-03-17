function validatePIN (pin) {
  //return true or false
  let validate4Pin = /^\d{4}$/.test(pin);
  let validate6Pin = /^\d{6}$/.test(pin);
  if (validate4Pin || validate6Pin) {return true}
  else {return false}
}