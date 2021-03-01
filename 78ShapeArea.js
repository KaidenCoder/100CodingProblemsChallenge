/**Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

For n = 2, the output should be
shapeArea(n) = 5;
For n = 3, the output should be
shapeArea(n) = 13.
*/

function shapeArea(n) {
    // n**2 + (n-1)**2   
    // 1, 1 -- 1**1 + (1-1)**2
    // 2, 5 --  2**2 + (2-1)**2 
    // 3, 13 --  3**3 + (3-1)**2
    // 4, 30 --  4**4 + (4-1)**2  
    // 5, 

    return (n ** 2) + (n - 1) ** 2

}
