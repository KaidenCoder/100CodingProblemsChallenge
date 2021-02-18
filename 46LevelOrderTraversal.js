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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let res = []
    addNodes(root, 0)
    return res

    function addNodes(node, level) {
        if (node == null) {
            return;
        }

        if (!res[level]) {
            res[level] = [node.val]

        } else {
            res[level].push(node.val)
        }

        addNodes(node.left, level + 1)
        addNodes(node.right, level + 1)

    }
};