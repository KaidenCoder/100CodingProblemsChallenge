/**
 * @param {string} s
 * @return {number}
 * Example 1:

Input: s = "leetcode"
Output: 2
Explanation: The substring "ee" is of length 2 with the character 'e' only.
 */
var maxPower = function (s) {
    let max = 1, i = 0, freq = 1
    while (i < s.length - 1 && s.length - i - 1 + freq > max) {
        if (s[i] == s[i + 1]) {
            freq++
        } else {
            if (max < freq) {
                max = freq
            }
            freq = 1
        }
        i++
    }

    if (max < freq) {
        return freq
    }
    return max
};