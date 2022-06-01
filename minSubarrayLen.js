function minSubArrayLen(arr, sum) {

    let windowStart = 0, windowEnd = 1, len;

    let tempSum = arr[0];
    while(windowStart < windowEnd && windowEnd < arr.length + 1) {
        if(tempSum >= sum) {
            
            if(len === undefined || len > windowEnd - windowStart) {
                len = windowEnd - windowStart;
            }
            
            tempSum = tempSum - arr[windowStart];
            windowStart++;
        } else if(tempSum < sum) {
            tempSum = tempSum + arr[windowEnd];
            windowEnd++;
        }       
    }
    if (len === undefined)
        return 0;
    return len;
}