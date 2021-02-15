/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let hash = new Set()
    while (head != null) {
        hash.add(head)
        if (hash.has(head.next)) {
            return head.next
        }
        head = head.next
    }
    return null
};