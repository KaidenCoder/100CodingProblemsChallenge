/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let a = nums1.sort((a, b) => a - b)
    let b = nums2.sort((a, b) => a - b)
    let res = []
    while (a.length && b.length) {
        if (a[0] === b[0]) {
            res.push(a.shift())
            b.shift()
        } else if (a[0] > b[0]) {
            b.shift()
        } else {
            a.shift()
        }
    }
    return res
};