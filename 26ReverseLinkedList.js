/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


var reverseList = function (head) {
    // 1 -> 2 -> 3 -> 4
    let prev = null
    let curr = head // 1
    while (curr != null) { // 1, 2, 3, 4
        let nextTemp = curr.next // 2, 3, 4 // null
        curr.next = prev //4 -> 3 -> 2 -> 1 -> null 
        prev = curr // 1 // 2 // 3 // 4
        curr = nextTemp // 2 // 3 // 4 // null
    }
    return prev // 4 -> 3 -> 2 -> 1 -> null
};