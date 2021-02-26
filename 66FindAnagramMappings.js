/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var anagramMappings = function (A, B) {
    let res = {}
    for (let i = 0; i < B.length; i++) {
        res[B[i]] = i;
    }

    let ans = new Array(A.length).fill(0)
    let t = 0;
    for (let i = 0; i < A.length; i++) {
        ans[t++] = res[A[i]]
    }
    return ans
};