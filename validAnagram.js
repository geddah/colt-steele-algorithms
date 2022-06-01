function validAnagram(word1, word2){
  // add whatever parameters you deem necessary - good luck!
  if(word1.length != word2.length)
    return false;
  var word1Map = {}, word2Map = {};
  for(var letter1 of word1) {
      if(letter1 in word1Map)
        word1Map[letter1] = word1Map[letter1] + 1;
      else
        word1Map[letter1] = 1;
  }
  
  for(var letter2 of word2) {
      if(letter2 in word2Map)
        word2Map[letter2] = word2Map[letter2] + 1;
      else
        word2Map[letter2] = 1;
  }
  
  for(var [key, value] of Object.entries(word1Map)) {
      if(word1Map[key] != word2Map[key])
        return false
  }
  
  return true;
  
}