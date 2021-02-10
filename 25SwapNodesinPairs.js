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
var swapPairs = function (head) {
    if (head == null || head.next == null) {
        return head;
    }

    // 1 2 3 4
    // 2 1 4 3

    let first = head.next // 2 // 4
    let second = head.next.next // 3 // null 
    first.next = head // 1 // 3


    head.next = swapPairs(second) // 1 ->

    return first // 2 -> 1 ->4 -> 3 -> null
};

// Input: head = [1,2,3,4]
// Output: [2,1,4,3]