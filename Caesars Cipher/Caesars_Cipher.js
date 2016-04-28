function rot13(str) { // LBH QVQ VG!
  var key = 13;
  var start = 'A'.charCodeAt();
  var end = 'Z'.charCodeAt();
  var charStr ='';
  var decodedStr ='';
  for (var i = 0; i<str.length; i++) {
  	charStr = str[i].charCodeAt();
  	if(charStr < start) {
  		decodedStr += String.fromCharCode(charStr);
  	} else if(charStr + key <= end) {
   	    charStr += key;
   		decodedStr += String.fromCharCode(charStr);
   } else {
   	    charStr = (charStr + key)%26+(start - key);
   	    decodedStr += String.fromCharCode(charStr);
   }
  }
  return decodedStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");