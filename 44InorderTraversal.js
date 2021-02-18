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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let res = []
    addNodes(root)
    return res

    function addNodes(node) {
        if (node == null) {
            return;
        }

        addNodes(node.left)
        res.push(node.val)
        addNodes(node.right)

    }
};