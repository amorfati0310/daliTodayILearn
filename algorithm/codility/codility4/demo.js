function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const dicA = A.reduce((ac, c) => {
        ac[c] = c
        return ac;
    }, {})
    for (let i = 1; i <= A.length + 1; i++) {
        if (dicA[i] !== i) return i;
    }
}
console.log(solution([1, 2, 3]));