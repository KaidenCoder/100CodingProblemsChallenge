// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4]
// Explanation: Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively. It doesn't matter what values are set beyond the returned length.

var removeDuplicates = function (nums) {
    var seen = {}
    var result = []
    var count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (!(nums[i] in seen)) {
            nums[count] = nums[i]
            seen[nums[i]] = true
            count++
        }
    }
    return nums

};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

console.log(removeDuplicates(nums))

