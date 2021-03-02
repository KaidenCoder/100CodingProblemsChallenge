// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
/**
 * 
 *Example

For l = [3, 1, 2, 3, 4, 5] and k = 3, the output should be
removeKFromList(l, k) = [1, 2, 4, 5];
For l = [1, 2, 3, 4, 5, 6, 7] and k = 10, the output should be
removeKFromList(l, k) = [1, 2, 3, 4, 5, 6, 7].
 */
//
function removeKFromList(l, k) {
    let fh = l
    let curr = fh
    while (curr != null) {
        while (curr.next != null && curr.next.value == k) {
            curr.next = curr.next.next
        }
        curr = curr.next
    }
    while (fh != null && fh.value == k) {
        fh = fh.next
    }
    return fh
}
