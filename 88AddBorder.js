/**
 * 
 * @param {For

picture = ["abc",
           "ded"]
the output should be

addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]} picture 
 */

function addBorder(picture) {
    let len = picture[0].length
    let ast = '*'
    for (let i = 0; i < len; i++) {
        ast += "*"
    }
    ast += '*'
    let res = []
    res.push(ast)
    for (let i = 0; i < picture.length; i++) {
        let s = "*" + picture[i] + "*"
        res.push(s)
    }
    res.push(ast)
    return res
}
