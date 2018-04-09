function solution(X, A) {
    //X = {} dic으로 만들기 !
    let dic = {};

    for (let i = 0; i < A.length; i++) {
        if (A[i] > X) continue;
        if (!(A[i] in dic)) dic[A[i]] = i;
    }
    for (let i = 1; i <= X; i++) {
        if (dic[i] === undefined) return -1
    }
    return Math.max(...Object.values(dic))
}
console.log(solution(5, [1, 3, 1, 4, 2, 3,7,8, 5, 4, 6]));
console.log(solution(5, [3]));