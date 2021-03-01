// Example

// For statues = [6, 2, 3, 8], the output should be
// makeArrayConsecutive2(statues) = 3.

// Ratiorg needs statues of sizes 4, 5 and 7.



function makeArrayConsecutive2(statues) {

    let nums = statues.sort((a, b) => a - b)
    let start = nums[0]
    let end = nums[statues.length - 1]
    let diff = end - start
    return Math.abs(diff - statues.length + 1)

}
