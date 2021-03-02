/**
 * 
 * @param {*} a 
 */

function rotateImage(a) {
    let r = a.length
    let c = a[0].length
    let res = []
    let res1 = []
    for (let j = 0; j < c; j++) {
        for (let i = r - 1; i > -1; i--) {

            res1.push(a[i][j])
        }
        res.push(res1)
        res1 = []
    }
    return res
}
