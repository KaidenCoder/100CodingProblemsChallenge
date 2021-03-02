/**
 * @param {number[]} candyType
 * @return {number}
 * Example 1:

Input: candyType = [1,1,2,2,3,3]
Output: 3
Explanation: Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.
Example 2:

Input: candyType = [1,1,2,3]
Output: 2
Explanation: Alice can only eat 4 / 2 = 2 candies. Whether she eats types [1,2], [1,3], or [2,3], she still can only eat 2 different types.
Example 3:

Input: candyType = [6,6,6,6]
Output: 1
Explanation: Alice can only eat 4 / 2 = 2 candies. Even though she can eat 2 candies, she only has 1 type.

 */
var distributeCandies = function (candyType) {
    let totalcandies = [... new Set(candyType)]
    let olen = candyType.length;
    let elen = totalcandies.length
    let diff = (olen / 2) - elen

    if (elen <= olen / 2) {
        return elen
    }

    if (elen > olen / 2) {
        return olen / 2
    }
    return elen
};