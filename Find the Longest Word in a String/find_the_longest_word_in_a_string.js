function findLongestWord(str) {
  str = str.split(' ');
  var theLongest = 0;
  for(var i = 0; i < str.length; i++) {
    if (theLongest < str[i].length) {
      theLongest = str[i].length;
    }
  }
 return theLongest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
