function firstDuplicateValue(array) {
    const seen = new Set()
    for (const v of array) {
        if (seen.has(v)) {
            return v
        } else {
            seen.add(v)
        }
    }
    return -1;
}


let arr = [2, 1, 5, 2, 3, 3, 4]

console.log(firstDuplicateValue(arr))