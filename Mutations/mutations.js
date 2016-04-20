function mutation(arr) {
  var firstEl = arr[0].toLowerCase();
  var secondEl = arr[1].toLowerCase();
  
  for (var i = 0; i < secondEl.length; i++) {
  	var check = firstEl.indexOf(secondEl[i]);
  	if(check === -1) {
  		return false;
  	}
  }
  return true;
}
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);