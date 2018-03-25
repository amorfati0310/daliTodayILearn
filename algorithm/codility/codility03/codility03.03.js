function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    const numbers = [...Array(A.length + 1).keys()].map(x => x + 1)

    return numbers.concat(A).reduce((prev, cur) => {
        return prev ^= cur;
    })

}
console.log(solution([1, 2, 3, 4]));


// 다른 사람 파이썬 풀이 -> sum을 구한 다음에 하나씩 뺴준다 !!!
// def solution(A):
//     N = len(A) + 1
//     missing = ((N + 1) * N) / 2

//     for x in A:
//         missing -= x

//     return missing

// O(N) or O(N * log(N))