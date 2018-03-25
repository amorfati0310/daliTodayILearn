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
console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4, 6]));
console.log(solution(5, [3]));


// function solution(X, A) {
//     //X = {} dic으로 만들기 !
//     let dic = {};
//     for(let i =1; i<=X; i++){
//         dic.i =
//     }
//     for (let i = 0; i < A.length; i++) {
//         if (!(A[i] in dic)) dic[A[i]] = i;
//     }
//     console.log(dic);
//     for (let i = 1; i <= X; i++) {
//         if (!dic[i] in dic) return -1
//     }
//     return Math.max(...Object.values(dic))
// }
// console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]));

// A[0] = 1
// A[1] = 3
// A[2] = 1
// A[3] = 4
// A[4] = 2
// A[5] = 3
// A[6] = 5
// A[7] = 4