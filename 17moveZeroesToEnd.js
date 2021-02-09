var moveZeroes = function (nums) {
    let len = nums.length
    let count = 0;
    for (let i = 0; i < len; i++) {
        if (nums[i] != 0) {
            nums[count] = nums[i]
            count = count + 1
        }

    }
    while (count < len) {
        nums[count] = 0
        count = count + 1
    }
    return nums
};

console.log(moveZeroes([0, 1, 0, 3, 12]))