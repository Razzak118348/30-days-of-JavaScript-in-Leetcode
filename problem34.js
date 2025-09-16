var searchRange = function(nums, target) {
    function binarySearch(nums, target, findFirst) {
        let left = 0, right = nums.length - 1;
        let result = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) {
                result = mid;
                if (findFirst) {
                    right = mid - 1;  // continue searching left
                } else {
                    left = mid + 1;   // continue searching right
                }
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }

    let first = binarySearch(nums, target, true);
    let last = binarySearch(nums, target, false);
    return [first, last];
};

console.log(searchRange([5,7,7,8,8,10],8)) // [3,4]