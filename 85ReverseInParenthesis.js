/**
 * 
 * @param {Example

For inputString = "(bar)", the output should be
reverseInParentheses(inputString) = "rab";
For inputString = "foo(bar)baz", the output should be
reverseInParentheses(inputString) = "foorabbaz";
For inputString = "foo(bar)baz(blim)", the output should be
reverseInParentheses(inputString) = "foorabbazmilb";
For inputString = "foo(bar(baz))blim", the output should be
reverseInParentheses(inputString) = "foobazrabblim".
Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".} inputString 
 */


function reverseInParentheses(inputString) {
    while (inputString.includes('(')) {
        let h = inputString.lastIndexOf('(')
        let t = inputString.indexOf(')', inputString.lastIndexOf('('))

        inputString = inputString.slice(0, h) + reverseString(inputString.slice(h + 1, t)) + (t + 1 === inputString.length ? inputString.slice(t, -1) : inputString.slice(t + 1))
    }
    return inputString

}

const reverseString = str => str.split('').reverse().join('') 
