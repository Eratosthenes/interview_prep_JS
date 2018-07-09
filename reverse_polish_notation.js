/**
Evaluate the value of an arithmetic expression in Reverse Polish Notation. Valid 
operators are +, -, *, /. Each operand may be an integer or another expression. For example:

["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6
**/

rpn = function (a) {
    let expr, r = [];
    for (let x of a) {
        if (/\d/.test(x)) { // it's a number
            r.push(x);
        }
        else { // it's an operation
            expr = [r.pop(), x, r.pop()].reverse().join('');
            r.push(parseInt(eval(expr)));
        }
        console.log(r);
    }
    return r[0];
}

var a = ["2", "1", "+", "3", "*"];
console.log(rpn(a));
var b = ["4", "13", "5", "/", "+"];
console.log(rpn(b));
