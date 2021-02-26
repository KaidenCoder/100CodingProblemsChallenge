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
var deleteDuplicates = function(head) {
    if(!head || !head.next){
        return head;
    }
    let newHead = new ListNode(null)
    newHead.next = head;
    let prev = newHead
    let curr = prev.next
    while(curr != null){
        if(curr.next == null){
            return newHead.next
        }
        if(curr.val == curr.next.val){
            let post = curr.next
            while(post != null && post.val ==curr.val){
                post = post.next
            }
            curr = post
            prev.next = post
        } else {
            prev = prev.next
            curr = curr.next
        }
    }
    return newHead.next
    
};