/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var deleteNodes = function (head, m, n) {
    let curr = head // 1
    let count = 0
    if (m == 0) {
        return null
    }
    while (curr != null) {
        for (count = 1; count < m && curr != null; count++) {
            curr = curr.next // 1 -> 2
            // 6 -> 7
            // 11 -> 12
        }

        if (curr == null) {
            return head;
        }

        let t = curr.next; // 3 8 13
        for (count = 1; count <= n && t != null; count++) {
            // let temp = t;
            t = t.next; // 3 (1)-> 4 (2)-> 5 (3)-> 6
            // 8(1) -> 9(2) -> 10(3) -> 11
            // 13(1) -> null
        }
        curr.next = t; // 1 -> 2 -> 6 -> 7 -> 11 -> 12 -> null
        curr = t; // 6 11 null

    }
    return head
};