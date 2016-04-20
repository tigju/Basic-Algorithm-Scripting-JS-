function palindrome(str) {
  // Good luck!
  str = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
  var newStr = str.split('').reverse().join('');
  if (str == newStr) {
    return true;
  }  else {
    return false;
  }
}



palindrome("0_0 (: /-\ :) 0-0");
