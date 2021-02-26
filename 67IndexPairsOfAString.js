/**
 * @param {string} text
 * @param {string[]} words
 * @return {number[][]}
 * Example 1:

Input: text = "thestoryofleetcodeandme", words = ["story","fleet","leetcode"]
Output: [[3,7],[9,13],[10,17]]
 */
var indexPairs = function (text, words) {
    let res = []

    for (let i = 0; i < text.length; i++) {
        words.forEach(word => {
            if (word[0] === text[i] && word === text.slice(i, word.length + i)) {
                res.push([i, i + word.length - 1])
            }
        })
    }
    return res.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1])


};