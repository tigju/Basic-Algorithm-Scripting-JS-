function getIndexToIns(arr, num) {
  // sorts the numeric data
  arr.sort(function(a, b) {
      return a - b;
  });
  // in case in num is greater than last number in array
  var last = arr.length - 1;
  //  Find my place in this sorted array.
  for(var i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
        arr.splice(i, 0, num);
   		return arr.indexOf(arr[i]);
    }
    if (arr[last] < num) {
  	arr.push(num);
  	return arr.length - 1;
    }
  }
}
getIndexToIns([2, 5, 10], 15);