function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    const numbers = [...Array(A.length + 1).keys()].map(x => x + 1)

    return numbers.concat(A).reduce((prev, cur) => {
        return prev ^= cur;
    })

}
console.log(solution([1, 2, 3, 4]));

// O(N) or O(N * log(N))