/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
    let c1 = new Array(26).fill(0)
    let c2 = new Array(26).fill(0)

    for (let i = 0; i < s.length; i++) {
        c1[s[i].charCodeAt(0) - 97]++
    }

    for (let i = 0; i < t.length; i++) {
        c2[t[i].charCodeAt(0) - 97]++
    }

    let res = 0;
    for (let i = 0; i < 26; i++) {
        if (c2[i] > c1[i]) {
            res += (c2[i] - c1[i])
        }

    }
    return res
};