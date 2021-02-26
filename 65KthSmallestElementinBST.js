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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let result = null

    const helper = (node) => {
        if (!node) return;

        helper(node.left);
        k--;
        if (k == 0) {
            result = node.val
        }
        helper(node.right)
    }
    helper(root)
    return result
};