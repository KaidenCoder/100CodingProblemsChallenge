/**For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].
*/

function allLongestStrings(inputArray) {
    let max = 0;
    inputArray.forEach(arr => max = Math.max(max, arr.length))
    let res = []
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length == max) {
            res.push(inputArray[i])
        }
    }
    return res
}
