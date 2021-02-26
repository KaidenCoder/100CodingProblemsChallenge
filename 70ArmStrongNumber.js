/**
 * @param {number} N
 * @return {boolean}
 * Example 1:

Input: 153
Output: true
Explanation: 
153 is a 3-digit number, and 153 = 1^3 + 5^3 + 3^3.

 Example 2:

Input: 2
Output: true
Explanation: 
2 is a 1-digit number, and 2 = 2^1.
 */
var isArmstrong = function (N) {

    const S = String(N)
    const len = S.length
    let res = 0
    for (let n of S) {
        res += Math.pow(n, len)
    }

    return res === N



    //     let myFunc = num => Number(num);

    //     var intArr = Array.from(String(N), myFunc);
    //     let prod = 1;
    //     let sum = 0;

    //     for(let i=0; i < intArr.length; i++){
    //         sum +=  intArr[i] * intArr[i] * intArr[i]
    //     }

    //     if(sum == N){
    //         return true
    //     }else{
    //         return false
    //     }

};