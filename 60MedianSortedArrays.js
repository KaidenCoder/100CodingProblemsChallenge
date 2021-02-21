/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let nums = nums1.concat(nums2)
    let res = nums.sort((a, b) => a - b)
    let n = res.length;
    let m = n >> 1;
    return n & 1 ? res[m] : (res[m - 1] + res[m]) / 2;
};