/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]]) {
            return nums[i]
        } else {
            hash[nums[i]] = true
        }
    }
};