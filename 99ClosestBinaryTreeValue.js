/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * Example:
 * Input: root = [4,2,5,1,3], target = 3.714286

    4
   / \
  2   5
 / \
1   3

Output: 4
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function (root, target) {
    let min = Infinity;
    let closest = null
    dfs(root)
    return closest

    function dfs(root) {
        if (!root) return
        let diff = Math.abs(root.val - target)
        if (min > diff) {
            min = diff
            closest = root.val
        }
        dfs(root.left)
        dfs(root.right)
    }
};