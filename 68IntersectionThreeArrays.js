/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 Example 1:

Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]
Output: [1,5]
Explanation: Only 1 and 5 appeared in the three arrays.
 */
var arraysIntersection = function (arr1, arr2, arr3) {
    let res = []
    let p1 = 0, p2 = 0, p3 = 0;

    while (p1 < arr1.length && p2 < arr2.length && p3 < arr3.length) {
        if (arr1[p1] == arr2[p2] && arr2[p2] == arr3[p3]) {
            res.push(arr1[p1])
            p1++
            p2++
            p3++
        } else {
            if (arr1[p1] < arr2[p2]) {
                p1++
            } else if (arr2[p2] < arr3[p3]) {
                p2++
            } else {
                p3++
            }
        }
    }
    return res
};
