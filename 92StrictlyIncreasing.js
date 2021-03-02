/**
 * 
 * @param {You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

Example

For inputArray = [1, 1, 1], the output should be
arrayChange(inputArray) = 3.} inputArray 
 */

function arrayChange(inputArray) {
    let s = 0, tmp = 0
    while (inputArray.length > 1) {
        if (inputArray[0] >= inputArray[1]) {
            tmp = (inputArray[0] - inputArray[1]) + 1
            inputArray[1] = tmp + inputArray[1]
            s = s + tmp
        }
        inputArray.shift()
    }
    return s
}
