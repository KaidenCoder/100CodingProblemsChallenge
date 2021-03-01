/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    nums.sort((a, b) => a - b)
    let inegative = nums.findIndex((num) => num > 0)
    nums = nums.slice(inegative, nums.length)
    nums = [...new Set(nums)]

    let increment = 1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == increment) {
            increment += 1
        } else {
            break;
        }
    }
    return increment

};