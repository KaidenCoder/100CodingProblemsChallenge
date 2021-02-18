/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let li = []
    let curr = head
    while (curr != null) {
        li.push(curr.val)
        curr = curr.next
    }

    let front = 0
    let back = li.length - 1
    while (front < back) {
        if (li[front] != li[back]) {

            return false
        }
        front++
        back--
    }
    return true
};