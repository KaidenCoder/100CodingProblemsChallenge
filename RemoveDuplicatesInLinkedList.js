// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function removeDuplicatesFromLinkedList(head) {
    // Write your code here.
    let current = head;
    while (current != null && current.next != null) {
        if (current.value == current.next.value) {
            current.next = current.next.next
        } else {
            current = current.next;
        }
    }
    return head;
}