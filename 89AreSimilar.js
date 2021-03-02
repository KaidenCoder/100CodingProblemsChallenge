/**
Example

For a = [1, 2, 3] and b = [1, 2, 3], the output should be
areSimilar(a, b) = true.

The arrays are equal, no need to swap any elements.

For a = [1, 2, 3] and b = [2, 1, 3], the output should be
areSimilar(a, b) = true.

We can obtain b from a by swapping 2 and 1 in b.

For a = [1, 2, 2] and b = [2, 1, 1], the output should be
areSimilar(a, b) = false.

Any swap of any two elements either in a or in b won't make a and b equal.
 */

function areSimilar(a, b) {

    let diff = []
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            diff.push(i)
        }
    }

    if (diff.length == 0) return true

    if (diff.length == 2) {
        if (a[diff[0]] != b[diff[1]] || a[diff[1]] != b[diff[0]]) {
            return false
        }
    }


    return diff.length == 0 || diff.length == 2
}
