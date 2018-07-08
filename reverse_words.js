/**
Given an input string, reverse the string word by word. A word is defined as a sequence 
of non-space characters.

The input string does not contain leading or trailing spaces and the words are always 
separated by a single space.

For example,
Given s = "the sky is blue",
return "eht yks si eulb"

second example:
Given s = "the sky is blue",
return "blue is sky the"

Could you do it in-place without allocating extra space?
**/

reg_reverse = function (s) {
    let r = [];
    for (let word of s.split(' ')) {
        r.push(word.split('').reverse().join(''));
    }

    return r.join(' ');
}

// reverse a word in-place
rev = function (word) {
    let tmp;
    word = word.split('');
    for (let j = word.length; j > 0; j --){
        for (let i = 1; i < j; i++) {
            tmp = word[i-1];
            word[i-1] = word[i];
            word[i] = tmp;
        }
    }
    return word.join('');
}

rev_arr = function (a) {
    let tmp;
    a = a.split(' ');
    for (let j = a.length; j > 0; j --){
        for (let i = 1; i < j; i++) {
            tmp = a[i-1];
            a[i-1] = a[i];
            a[i] = tmp;
        }
    }
    return a.join(' ');
}

in_place_rev = function (s) {

    s = s.split(' ');
    for (let i in s) {
        s[i] = rev(s[i]);
    }
    return s.join(' ');
}

let s = "the sky is blue";
console.log(in_place_rev(s));
console.log(rev_arr(s))
