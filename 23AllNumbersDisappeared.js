var findDisappearedNumbers = function (nums) {
    let newArr = [...new Set(nums)]
    let allArr = []
    for (let i = 1; i < nums.length + 1; i++) {
        allArr.push(i)
    }
    return allArr.filter(e => newArr.indexOf(e) === -1)

};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))