class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let ans

function binaryTreeDiameter(tree) {
    // Write your code here.
    ans = 1
    depth(tree)
    return ans - 1
}

function depth(root) {
    if (root == null) {
        return 0
    }
    let L = depth(root.left)
    let R = depth(root.right)

    ans = Math.max(ans, L + R + 1)
    return Math.max(L, R) + 1

}