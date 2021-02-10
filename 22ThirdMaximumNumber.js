var thirdMax = function (nums) {
    var sortedArray = nums.sort((a, b) => b - a)
    let mySet = new Set(sortedArray)
    let setToSortedArray = [...mySet]
    if (setToSortedArray.length < 3) {
        return setToSortedArray[0]
    }
    return setToSortedArray[2]
};

console.log(thirdMax([2, 2, 3, 1]))