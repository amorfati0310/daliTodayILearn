
//     maxValue = maxValue+=new Set(A.slice(0,maxIdx)).size
//     makeNCounter.fill(maxValue);
//     const rest = A.slice(maxIdx+1, A.length)
//     return fillMax(rest);
// }

// function solution(N, A) {
//     const makeNCounter = Array(N).fill(0)
//     let maxValue = 0
//     let start = 0
//     const lastMaxIdx = A.lastIndexOf(N+1)
//     if(maxIdx===-1) break;
//     else{
//         const filledArr = A.slice(0,lastMaxIdx)
//         maxValue = maxValue+=new Set(A.slice(0,maxIdx)).size
//         makeNCounter.fill(maxValue);
//         start = maxIdx+1
//     }
//     for(let i =start; i<arr.length; i++){
//             makeNCounter[arr[i]-1]+=1
//             maxValue = Math.max(makeNCounter[arr[i]-1],maxValue)
//         }
//     }
//     return makeNCounter;
// }
// console.log(solution(5, [3,4,4,6,1,4,6,1,2,3,6,4,5,4]));


// function solution(N, A) {
//     const makeNCounter = Array(N).fill(0)
//     let maxValue = 0

//     for(let i =0; i<A.length; i++){
//         if(A[i]===N+1){
//             makeNCounter.fill(maxValue)
//         }
//         else{
//             makeNCounter[A[i]-1]+=1
//             maxValue = Math.max(makeNCounter[A[i]-1],maxValue)   
//         }
//     }
//     return makeNCounter;
// }