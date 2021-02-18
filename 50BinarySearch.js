/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let front = 0;
    let back = nums.length - 1

    while (front <= back) {
        let mid = Math.floor((front + back) / 2)

        if (nums[mid] == target) {
            return mid
        } else if (nums[mid] > target) {
            back = mid - 1
        } else {
            front = mid + 1
        }

    }
    return -1
};