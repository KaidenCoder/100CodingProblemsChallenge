/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    if (root == null) return

    const nodes = []
    nodes.push(root)


    while (nodes.length) {
        const node = nodes.pop()

        if (node.right) {
            nodes.push(node.right)
        }

        if (node.left) {
            nodes.push(node.left)
        }

        if (nodes.length) {
            node.right = nodes[nodes.length - 1]
        }

        node.left = null


    }
};