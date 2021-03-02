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
 * @return {number}
 */
var rob = function (root) {
    function inner(root) {
        if (!root) {
            return [0, 0]
        }
        let left = inner(root.left)
        let right = inner(root.right)

        return [Math.max(root.val + left[1] + right[1], left[0] + right[0]), Math.max(left[0] + right[0], left[1] + right[1])]
    }
    return Math.max(...inner(root))
};