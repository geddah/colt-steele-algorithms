function maxSubarraySum(arr, size){
    if(size === 0) {
        return null;
    }

    if(arr.length === 0) {
        return null;
    }

    if(size > arr.length) {
        return null;
    }
    
    let maxSum = null;
    
    for(var k = 0; k < size; k++) {
        if(maxSum === null)
            maxSum = arr[k];
        else
            maxSum = maxSum + arr[k];
    }
    var i = 0, j = size;
    var tempSum = maxSum;
    while(j < arr.length) {
        tempSum = tempSum + arr[j] - arr[i];
        if(tempSum > maxSum) {
            maxSum = tempSum;
        }
        i++;j++;
    }
    return maxSum;
    
}