// Input: rowIndex = 3
// Output: [1,3,3,1]

var getRow = function (rowIndex) {
    const res = []
    while (res.length <= rowIndex) {
        res.unshift(1)
        console.log(res)
        // [ 1 ]
        // [ 1, 1 ]
        // [ 1, 1, 1 ]
        // [ 1, 1, 2, 1 ]
        // [ 1, 1, 3, 3, 1 ]
        // [ 1, 4, 6, 4, 1 ]
        for (let i = 1; i < res.length - 1; i++) {
            res[i] = res[i] + res[i + 1]

        }
    }
    return res
};

console.log(getRow(4))