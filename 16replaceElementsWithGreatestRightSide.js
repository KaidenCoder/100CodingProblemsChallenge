var replaceElements = function (arr) {
    let max = -Infinity
    let lastseen = -1;
    for (let i = arr.length - 1; i > -1; i--) {
        max = Math.max(arr[i], lastseen)// 1, 6, 6, 6, 18 18
        arr[i] = lastseen // -1 1 6 6 6 18
        lastseen = max // 6 6 6 6 18
    }
    return arr
};

console.log(replaceElements([17, 18, 5, 4, 6, 1]))