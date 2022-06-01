function areThereDuplicates(...args) {
  var i = 0;
  for(var j = i + 1; j < args.length; j++ ) {
      

      if(j !== i && args[j] === args[i]) {
          return true;
      }

    if (j === args.length - 1) {
          j=++i;          
      }
  }

    return false;
}