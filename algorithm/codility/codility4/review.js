function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    // A -> P
    let P = [];
    let plusRest = A[0];
    let minusRest = A.slice(1).reduce((a, b) => a + b);
    let minDiff = Math.abs(plusRest - minusRest);
    for (let i = 1, max = A.length; i < max; i++) {
        plusRest += A[i]
        minusRest -= A[i]
        diff = Math.abs(plusRest - minusRest);
        minDiff = Math.min(minDiff, diff)
    }
    return minDiff

}
var d = [...Array(100000)].map((v, i) => ++i);
solution(d);



//https://app.codility.com/demo/results/trainingY8CR66-7YQ/
// 100 100 나왔습니다 :D