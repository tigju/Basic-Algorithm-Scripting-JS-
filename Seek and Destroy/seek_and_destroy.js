function destroyer(arr) {
  // Remove all the values
  var args = Array.prototype.slice.call(arguments, 1);
  function remove(num) {
    return args.indexOf(num) === -1;
    }
  
  var newArr = arguments[0].filter(remove);
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
