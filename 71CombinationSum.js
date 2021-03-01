/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let result = []
    backtrack(candidates, 0, target, [], result)
    return result
};

var backtrack = function (cand, start, target, list, result) {
    if (target < 0) {
        return
    }

    if (target == 0) {
        result.push([...list])
    }
    for (let i = start; i < cand.length; i++) {
        if (cand[i] <= target) {
            list.push(cand[i])
            backtrack(cand, i, target - cand[i], list, result)
            list.pop()
        }
    }
}