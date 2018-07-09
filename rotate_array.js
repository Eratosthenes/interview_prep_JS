/**
Rotate an array of n elements to the right by k steps.

For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4]. 
How many different ways do you know to solve this problem?

best solution: 
reverse 0 -> k - 1, k - 1 -> a.length, then reverse whole array 
**/

rot = function (a, k) {
    return a.slice(a.length - k, a.length).concat(a.slice(0, a.length - k));
}

let a = [1,2,3,4,5,6,7];
console.log(rot(a, 3));
