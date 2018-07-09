/**
Given two strings s and t, determine if they are isomorphic. Two strings are isomorphic 
if the characters in s can be replaced to get t.

For example,"egg" and "add" are isomorphic, "foo" and "bar" are not.
Analysis

We can define a map which tracks the char-char mappings. If a value is already mapped, 
it can not be mapped again.
**/

is_isomorph = function (s, t) {
    if (! s.length == t.length ) return false;

    // mapping from s -> t
    let m = {};
    for (let i in s) {
        m[s[i]] = t[i];
    }

    // now convert s -> t using mapping
    let r = '';
    for (let ch of s) {
        r += m[ch];                                
    }
    return r == t;
}

console.log(is_isomorph('egg', 'add'));
console.log(is_isomorph('foo', 'bar'));
