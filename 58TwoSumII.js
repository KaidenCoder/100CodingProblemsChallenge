/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (num, target) {
    let start = 0
    let end = num.length - 1
    let l = 0, r = 0
    while (start < end) {
        if ((num[start] + num[end]) == target) {
            l = start
            r = end
        }

        if ((num[start] + num[end]) > target) {
            end--
        } else {
            start++
        }
    }
    return [l + 1, r + 1]

};