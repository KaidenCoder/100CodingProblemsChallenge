function hasSingleCycle(array) {
    let numVisited = 0
    let currentIdx = 0
    while (numVisited < array.length) {
        if (numVisited > 0 && currentIdx === 0) {
            return false
        }
        numVisited++
        currentIdx = getNextIdx(currentIdx, array)
    }
    return currentIdx === 0
}

function getNextIdx(currentIdx, array) {
    const jump = array[currentIdx]
    const nextIdx = (currentIdx + jump) % array.length
    return nextIdx >= 0 ? nextIdx : nextIdx + array.length
}

let array = [2, 3, 1, -4, -4, 2]

console.log(hasSingleCycle(array))