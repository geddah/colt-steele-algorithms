function sameFrequency(arg1, arg2) {
  arg1 = arg1 + "";
  arg2 = arg2 + "";
  let arg1Map = {}, arg2Map = {};

    if(arg1.length != arg2.length)
        return false;
    
  for(var i of arg1) {
      arg1Map[i] = arg1Map[i] === undefined ? 1 : arg1Map[i]++;
  }

   for(var j of arg2) {
       if ( arg1Map[j] === undefined || arg1Map[j]-- < 0 )
           return false;
   }

    return true;
}