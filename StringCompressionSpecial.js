function runLengthEncoding(str) {
    let strings = [];
    let chunk = '';
    for (let i = 0; i < str.length; i += 1) {
        // if [chunk] contains a character and its length is not 4 and 
        // its first character equals the current character add 
        // the current character to [chunk]
        if (chunk.length > 0 && chunk.length < 4 && str[i] === chunk[0]) {
            chunk += str[i];
        } else {
            // if [chunk] is not "", push it to [strings]
            chunk.length && strings.push(chunk);
            // reassign [chunk] using the current value
            chunk = str[i];
        }
    }
    // chunk may not be empty yet
    if (chunk.length) {
        strings.push(chunk);
    }
    // convert to string
    return strings
    //return strings.map(v => `${v.length}${v[0]}`).join("")
}
let str1 = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
let str3 = "AAAAA"
let str2 = "AAAAAAAAABBBBBCCCCDD"

console.log(runLengthEncoding(str2))