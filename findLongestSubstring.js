function findLongestSubstring(str) {
    if(str.length === 0) {
        return 0;
    }
    let windowStart = 0, windowEnd = 1;
    let strArray = str.split('');
    let length = 1, maxLength = 1;
    let countMap = {};
    countMap[strArray[0]] = 0;
    
    while( windowStart < windowEnd && windowEnd < str.length ) {
        if(countMap[strArray[windowEnd]] === undefined || countMap[strArray[windowEnd]] < windowStart ) {
            countMap[strArray[windowEnd]] = windowEnd;                       
            windowEnd++;
        } else {     
            length = windowEnd - windowStart;
            if( maxLength < length ) {
                maxLength = length;
            }
            windowStart = countMap[strArray[windowEnd]] + 1;        
            countMap[strArray[windowEnd]] = windowEnd;           
            windowEnd++;
        }
    }

    length = windowEnd - windowStart;
    if( maxLength < length ) {
        maxLength = length;
    }

    return maxLength;
}