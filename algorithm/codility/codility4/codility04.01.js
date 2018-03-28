// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let Adic = {}
    let len = A.length;
    for (let i = 1; i <= len; i++) {
        Adic[i] = i;
    }
    for (let i = 0; i < len; i++) {
        if (!(A[i] in Adic)) return 0;
    }
    return 1;
}
console.log(solution([2, 1, 3]));