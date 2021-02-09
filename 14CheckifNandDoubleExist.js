// Input: arr = [7,1,14,11]
// Output: true
// Explanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.

var checkIfExist = function (arr) {
    return arr.filter(e => arr.includes(2 * e));

};

let nums = [10, 2, 5, 3]

console.log(checkIfExist(nums))

