
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n < 0) {
        return 1 / helper(x, Math.abs(n))
    }
    else {
        return helper(x, n)
    }

};

function helper(x, n) {
    if (n == 0) {
        return 1
    }
    if (n == 1) {
        return x
    }

    if (n % 2 == 0) {
        return helper(x * x, n / 2)
    }
    return x * helper(x * x, (n - 1) / 2)
}