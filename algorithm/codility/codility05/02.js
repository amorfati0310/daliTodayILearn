// 문제 해석이 제일 어렵 ... 
// 세트를 내는 것이 답이 아니다. -> 갯수만 알려주면 됨 ! 고로 
// 그냥 reduce에서 결과를 낸다. -> 
// 근데 어떻게? 우선 0부터 시작해야 된다. 배열을 돌면서 0인 값이면 다음 값들을 
// 근데 이게 for -> for일 것 같은데 우선 해보고 짧게 할 수 있는 패턴을 찾아보자 


// 정확도는 100프로 나옴 고로 -> 이걸 간단하게 

// function solution(A) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let count = 0;
//     const result = A.reduce((ac,c,ci,arr)=>{
//         console.log('ac',ac,'c',c, 'ci', ci,'arr', arr);
//         if(c===0){
//             // 자기 자신 다음 부터 1인 것의 개수 고로 세트 할 수 있는 숫자
//             count += arr.slice(ci+1).filter(v=>v===1).length
//         }
//         return count;
//     }, count)
//     console.log('result', result);
//     return result;
// }

// solution([0,1,0,1,1])

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let counts = 0
    let zeroCounts = 0;

    for(let i =0; i<A.length; i++){
        if(A[i]===0) zeroCounts+=1
        if(A[i]===1) counts+=zeroCounts
    }
    if(counts>1000000000) counts = -1
    return counts;
}

console.log(solution([0,1,0,1,1]));
console.log(solution([1248768710]));