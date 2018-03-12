var replaceDots = function(str) {
  // This makes it so that we replace the dots with \. (this breaks it out of what it normally does which would be replacing all values)
  // The 'g' is a flag which marks it as global which has it look for all instances of the character that needs to be replaced
  return str.replace(/\./g, '-');
}