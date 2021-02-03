function minimumWaitingTime(queries) {
    let res = queries.sort((a, b) => a - b)
    let sum = 0;
    let result = 0;
    for (let i = 0; i < res.length - 1; i++) {
        sum += res[i]
        result += sum
    }
    return result;
}

// 1 2 2 3 6
// 0 1 3 5 8
// 17

console.log(minimumWaitingTime([3, 2, 1, 2, 6]))