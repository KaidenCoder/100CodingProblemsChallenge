/**Example

For n = 1230, the output should be
isLucky(n) = true;
For n = 239017, the output should be
isLucky(n) = false.
*/

function isLucky(n) {
    let ns = n.toString().split('')
    let len = ns.length;
    if (len % 2 == 0) {
        let part1 = len / 2
        let part2 = len
        let sum1 = 0;
        let sum2 = 0;
        for (let i = 0; i < part1; i++) {
            sum1 += parseInt(ns[i])
        }
        for (let i = part1; i < part2; i++) {
            sum2 += parseInt(ns[i])
        }

        if (sum1 == sum2) {
            return true
        }

    }
    return false
}
