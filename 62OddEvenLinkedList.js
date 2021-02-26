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
var oddEvenList = function (head) {
    if (head == null) {
        return null
    }
    let odd = head, even = head.next, evenHead = even
    // 1 2
    while (even != null && even.next != null) {
        odd.next = even.next // 1 -> 3 -> 5
        odd = odd.next // 3 5
        even.next = odd.next;// 2 -> 4 -> null
        even = even.next // 4 null
    }
    odd.next = evenHead; // 1 -> 3 -> 5 -> 2 -> 4 -> null
    return head;
};