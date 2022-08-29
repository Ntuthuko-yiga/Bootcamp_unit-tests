function longestWord(long) {
    var splitLong = long.split(" ");
    
    var longWord = 0;
    var result = "";
    
  for (var i=0; i<splitLong.length; i++) {  
      if (splitLong[i].length >= longWord) {
      longWord = splitLong[i].length;
      result = splitLong[i];
        } 
    }
    return result;
  }
  console.log(longestWord('The dog jumped over the shipyard fence')); 
  
  
  function shortestWord(short) {
    var splitShort = short.split(" ");
    var result = splitShort[0];
    
  for (var i=0; i<splitShort.length; i++) {  
      if (splitShort[i].length <= result.length) {
      result = splitShort[i];
        } 
    }
    return result;
  }
  console.log(shortestWord('The dog jumped over the shipyard fence'));
  
  
  function wordLengths(words) {
    var splitWord = words.split(" ");
    var wordLen = splitWord.map(w => w.length)
    let sum = 0;
    
  for (var i=0; i<wordLen.length; i++) {  
      sum += wordLen[i];
        } 
    return sum;
  }
  console.log(wordLengths('The dog jumped over the shipyard fence')); 