/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let count = 0
    let temp = head
    if (temp.next == null) {
        return null
    }
    while (temp != null) {
        temp = temp.next
        count = count + 1
    }
    let pos = count - n - 1
    let res = head
    if (pos < 0) {
        return head.next
    }
    while (pos) {
        res = res.next
        pos = pos - 1
    }
    res.next = res.next.next
    return head
};