function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    // A -> P
    let P = [];
    let plusRest = 0;
    let minusRest = A.reduce((a, b) => a + b);
    let diff;
    A.forEach(val => {
        plusRest += val
        minusRest -= val
        diff = Math.abs(plusRest - minusRest);
        P.push(diff);
    });
    P = P.slice(0, P.length - 1);
    return Math.min(...P);
}
solution([3, 1, 2, 4, 3])