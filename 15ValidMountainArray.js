var validMountainArray = function (arr) {

    if (arr.length < 3) {
        return false
    }

    let summit = Math.max(...arr);
    let topPassed = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == summit) {
            topPassed++
        }
        if (arr[0] == summit || arr[arr.length - 1] == summit ||
            (topPassed == 0 && arr[i] >= arr[i + 1]) ||
            (topPassed == 1 && arr[i] <= arr[i + 1])) {
            return false
        }
    }

    return true

};

console.log(validMountainArray([0, 3, 2, 1]))