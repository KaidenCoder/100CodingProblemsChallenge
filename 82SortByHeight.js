// Example

// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].


function sortByHeight(a) {
    let len = a.length;
    let b = a
    const result = b.filter(c => c != -1).sort((x, y) => x - y);
    let j = 0;
    for (let i = 0; i < len; i++) {
        if (a[i] == -1) {
            continue;
        } else {
            a[i] = result[j];
            j++
        }
    }
    return a

}
