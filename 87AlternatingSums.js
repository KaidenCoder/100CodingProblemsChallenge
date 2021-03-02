function alternatingSums(a) {
    let a1 = 0
    let a2 = 0
    let res = []
    for (let i = 0; i < a.length; i++) {
        if (i % 2 == 0) {
            a1 += a[i]
        }
        if (i % 2 !== 0) {
            a2 += a[i]
        }
    }

    res.push(a1)
    res.push(a2)
    return res
}
