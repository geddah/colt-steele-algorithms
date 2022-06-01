function averagePair(nums, target) {

    var i = 0, j = 1;
    while(j < nums.length) {
        if(nums[j] < target) {
            j++;
        }

        var average = (nums[i] + nums[j]) / 2;
        if(average < target) {
            i++;
        } else if (average === target) {
            return true;
        } 

        if(average > target) {
            break;
        }

        if( i === j ) {
            average = (nums[i] + nums[j]) / 2;
            if(average === target)
                return true;
            else
                break;
        }

    }

    return false;
}