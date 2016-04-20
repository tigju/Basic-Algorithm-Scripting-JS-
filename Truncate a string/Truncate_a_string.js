function truncateString(str, num) {
  // Clear out that junk in your trunk
  var len = str.length;
  if (num <= 3){
    var newStr = str.slice(0, num) + "...";
    return newStr;
  } else if (len > num){
    var nSt = str.slice(0, num-3) +"...";
    return nSt;
  } else {
    return str;
  }
  
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
