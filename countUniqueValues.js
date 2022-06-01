function countUniqueValues(arr){
    var i = 0;
    for(var j=1; i < arr.length && j < arr.length  ;) {
        if(arr[j] === arr[i]) {
            j++;
        } else {
            i++;
            arr[i] = arr[j];
        }
    }
    if(i === 0) {
        return 0;
    }
    return i+1;
}