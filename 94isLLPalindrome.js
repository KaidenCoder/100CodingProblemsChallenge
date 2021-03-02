// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//

/**
 * 
 * @param {For l = [0, 1, 0], the output should be
isListPalindrome(l) = true;

For l = [1, 2, 2, 3], the output should be
isListPalindrome(l) = false.} l 
 */
function isListPalindrome(l) {
    let li = []
    let curr = l
    while (curr != null) {
        li.push(curr.value)
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
}
