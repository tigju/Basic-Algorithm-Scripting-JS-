function largestOfFour(arr) {
  // You can do this!
  var newArr = [0,0,0,0];
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j <= arr[i].length; j++){
      if(arr[i][j] > newArr[i]){
        newArr[i] = arr[i][j];
      }
    }
  }
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
