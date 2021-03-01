/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    const pCount = Array(26).fill(0),
        sCount = Array(26).fill(0),
        result = [],
        targetLength = p.length

    for (let c of p) {
        pCount[c.charCodeAt() - 97]++
    }

    for (let i = 0; i < s.length; i++) {
        const c = s[i]
        sCount[c.charCodeAt() - 97]++

        if (i >= targetLength) {
            sCount[s[i - targetLength].charCodeAt() - 97]--
        }

        if (compareMaps(sCount, pCount)) {
            result.push(i - targetLength + 1)
        }

    }

    return result

};

const compareMaps = (curr, target) => {
    for (let i = 0; i < 26; i++) {
        if (curr[i] !== target[i]) {
            return false
        }
    }
    return true
}