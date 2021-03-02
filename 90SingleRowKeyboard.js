/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 * Example 1:

Input: keyboard = "abcdefghijklmnopqrstuvwxyz", word = "cba"
Output: 4
Explanation: The index moves from 0 to 2 to write 'c' then to 1 to write 'b' then to 0 again to write 'a'.
Total time = 2 + 1 + 1 = 4. 
 */
var calculateTime = function (keyboard, word) {
    let a = keyboard.split('')
    let b = word.split('')
    let sum = [];
    for (let i = 0; i < b.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (b[i] == a[j]) {
                sum.push(j)
            }

        }
    }
    let result = sum[0]

    for (let i = 1; i < sum.length; i++) {
        let diff = Math.abs(sum[i - 1] - sum[i])
        result += diff
    }

    return result

};