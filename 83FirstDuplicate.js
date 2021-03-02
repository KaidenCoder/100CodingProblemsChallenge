/**For a = [2, 1, 3, 5, 3, 2], the output should be firstDuplicate(a) = 3.

There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than the second occurrence of 2 does, so the answer is 3. */


function firstDuplicate(a) {
    // let dup = -1
    // let min = Number.MAX_VALUE
    // for(let i = 0; i < a.length -1; i++){
    //     for(let j = i+1; j < a.length; j++){
    //         if(a[i] == a[j]){
    //             min = Math.min(min, j - i)
    //             if(min == 1){
    //                 dup = a[i]
    //                 return dup
    //             }else if(min <= j-i){
    //                 dup = a[i]
    //             }
    //         }
    //     }
    // }
    // return dup

    /**  let hash = {}
     for(let i = 0; i < a.length; i++){
         if(hash[a[i]]){
             return a[i]
         } else{
             hash[a[i]] = true
         }
     }
     return -1 */

    let new_set = new Set()
    for (let i = 0; i < a.length; i++) {
        if (new_set.has(a[i])) {
            return a[i]
        } else {
            new_set.add(a[i])
        }
    }

    if (a.length == new_set.size) {
        return -1
    }
}
