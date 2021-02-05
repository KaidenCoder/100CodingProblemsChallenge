class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

function findSuccessor(tree, node) {
    // Write your code here.
    const arr = inOrderTravesal(tree);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == node && i != arr.length - 1) {
            return arr[i + 1]
        }
    }

    return null;
}

function inOrderTravesal(node, order = []) {
    if (node == null) {
        return order
    }

    inOrderTravesal(node.left, order);
    order.push(node)
    inOrderTravesal(node.right, order);

    return order

}