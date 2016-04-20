function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  function check(num) {
    if (num) 
      return num;
  }
  var newArr = arr.filter(check);
  return newArr;
}

bouncer([7, "ate", "", false, 9]);
