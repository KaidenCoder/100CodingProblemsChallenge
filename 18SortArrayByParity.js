var sortArrayByParity = function (A) {
    let res = []
    let res2 = []
    let i = 0;
    while (i < A.length) {
        if (A[i] % 2 == 0) {
            res.push(A[i])
        }
        else {
            res2.push(A[i])
        }
        i = i + 1;
    }

    return res.concat(res2);
};

console.log(sortArrayByParity([0, 1, 0, 3, 12]))