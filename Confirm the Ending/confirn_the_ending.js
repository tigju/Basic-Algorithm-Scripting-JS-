function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var count = target.split('').length;
  var strChunk = str.substr(-(count), count);
   if (target === strChunk) {
     return true;
   } else {
     return false;
   }
}

confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "frozen");
