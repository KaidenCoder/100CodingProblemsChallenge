/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Example:

Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    while (head != null && head.val == val) {
        head = head.next
    }
    let temp = head
    while (temp != null && temp.next != null) {
        if (temp.next.val == val) {
            temp.next = temp.next.next
        } else {
            temp = temp.next
        }
    }
    return head;
};