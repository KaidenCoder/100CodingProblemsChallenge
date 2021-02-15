var fib = function (n) {
    let dp = new Array(n + 1) /// 0 0 0

    dp[0] = 0, dp[1] = 1 // 1 1 0

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2] // 1 1 2
    }

    return dp[n] // 2
};
