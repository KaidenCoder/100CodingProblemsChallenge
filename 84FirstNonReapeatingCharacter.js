// Example

// For s = "abacabad", the output should be
// firstNotRepeatingCharacter(s) = 'c'.

// There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

// For s = "abacabaabacaba", the output should be
// firstNotRepeatingCharacter(s) = '_'.

// There are no characters in this string that do not repeat.

function firstNotRepeatingCharacter(s) {
    let ss = s.split('')
    let hash = {}
    for (let i = 0; i < ss.length; i++) {
        if (hash[ss[i]]) {
            hash[ss[i]] = 2
        } else {
            hash[ss[i]] = 1
        }
    }

    for (let i = 0; i < ss.length; i++) {
        if (hash[ss[i]] == 1) {
            return ss[i]
        }
    }
    return '_'
}
