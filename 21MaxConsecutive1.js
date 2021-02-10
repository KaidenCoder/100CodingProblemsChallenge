var findMaxConsecutiveOnes = function (nums) {
    let longestSequence = 0
    let left = 0
    let right = 0
    let numZeroes = 0

    while (right < nums.length) {
        if (nums[right] == 0) {
            numZeroes++
        }

        while (numZeroes == 2) {
            if (nums[left] == 0) {
                numZeroes--
            }
            left++
        }

        longestSequence = Math.max(longestSequence, right - left + 1)
        right++
    }

    return longestSequence;

};

console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0]))