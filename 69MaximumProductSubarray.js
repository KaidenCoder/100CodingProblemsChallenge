/**
 * @param {number[]} nums
 * @return {number}
 * Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
 */
var maxProduct = function (nums) {
    if (nums.length === 0) return 0

    let max = nums[0] // 2
    let min = nums[0] // 2
    let result = max // 2

    for (let i = 1; i < nums.length; i++) {
        let curr = nums[i]
        // 3
        // -2
        // 4
        let temp_max = Math.max(curr, Math.max(curr * max, min * curr))
        // 3, 6, 6 = 6
        // -2, -12, -6 = -2
        // 4, -8, -48 = 4
        min = Math.min(curr, Math.min(curr * max, curr * min))
        // 3, 6, 6 = 3
        // -2, -12, -6 = -12
        // 4, -8, -48 = -48
        max = temp_max // 6 , -2, 4
        result = Math.max(result, max) // 3, 6 = 6, -2 = 6, 4 = 6
    }
    return result
};