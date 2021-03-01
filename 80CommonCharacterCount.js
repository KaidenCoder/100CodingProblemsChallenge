/**For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".
*/

function commonCharacterCount(s1, s2) {
    let arrs1 = s1.split('').sort()
    let arrs2 = s2.split('').sort()
    let count = 0
    for (let i = 0; i < arrs1.length; i++) {
        for (let j = 0; j < arrs2.length; j++) {
            if (arrs1[i] == arrs2[j]) {
                arrs1[i] = "#"
                arrs2[j] = '#'
                count += 1
            }
        }
    }
    return count
}
