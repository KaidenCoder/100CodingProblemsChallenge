/**For

matrix = [[0, 1, 1, 2], 
          [0, 5, 0, 0], 
          [2, 0, 3, 3]]
the output should be
matrixElementsSum(matrix) = 9.

example 1

There are several haunted rooms, so we'll disregard them as well as any rooms beneath them. Thus, the answer is 1 + 5 + 1 + 2 = 9.

For

matrix = [[1, 1, 1, 0], 
          [0, 5, 0, 1], 
          [2, 1, 3, 10]]
the output should be
matrixElementsSum(matrix) = 9.
*/

function matrixElementsSum(matrix) {
    let sum = 0
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (i > 0) {
                let a = i - 1
                if (matrix[i][j] != 0 && (matrix[a][j] == 0)) {
                    matrix[i][j] = 0
                }
                if (matrix[i][j] != 0 && matrix[a][j] != 0) {
                    sum += matrix[i][j]
                }

            } else {
                if (matrix[i][j] != 0) {
                    sum += matrix[i][j]
                }
            }
        }
    }
    return sum
}
