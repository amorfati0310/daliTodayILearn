// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    let diff = Y - X;
    if (diff < 0) return 0;
    return Math.ceil(diff / D);
}


solution(10, 85, 30);