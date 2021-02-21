/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let start = 0, end = nums.length - 1
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2)
        if (nums[mid] == target) {
            return mid
        } else if (nums[mid] >= nums[start]) {
            if (nums[mid] > target && nums[start] <= target) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        } else {
            if (nums[mid] < target && nums[end] >= target) {
                start = mid + 1
            } else {
                end = mid - 1
            }
        }
    }
    return -1
};