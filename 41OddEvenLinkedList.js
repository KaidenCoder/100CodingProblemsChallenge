/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Example 1:

Input: 1->2->3->4->5->NULL
Output: 1->3->5->2->4->NULL
Example 2:

Input: 2->1->3->5->6->4->7->NULL
Output: 2->3->6->7->1->5->4->NULL
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