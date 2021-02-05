function kadanesAlgorithm(array) {
    // Write your code here.
    let maxEnd = array[0]
    let maxSoFar = array[0]
    for (let i = 1; i < array.length; i++) {
        maxEnd = Math.max(array[i], maxEnd + array[i])
        maxSoFar = Math.max(maxEnd, maxSoFar)
    }
    return maxSoFar
}

console.log(kadanesAlgorithm([-2, 1, -3, 4]))