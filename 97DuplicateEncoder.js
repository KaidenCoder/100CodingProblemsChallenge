/**
 * 
 * @param {The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" } word 
 */

function duplicateEncode(word) {
    // ...
    let hash = {}
    let res = []
    let w = word.toLowerCase().split('')
    for (let i = 0; i < w.length; i++) {
        if (hash[w[i]]) {
            hash[w[i]] = 2
        } else {
            hash[w[i]] = 1
        }
    }
    for (let i = 0; i < w.length; i++) {
        if (hash[w[i]] == 1) {
            res.push('(')
        } else if (hash[w[i]] == 2) {
            res.push(')')
        }
    }
    return res.join('')
}
