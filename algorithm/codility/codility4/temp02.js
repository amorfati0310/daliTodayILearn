function solution(N, A) {
    const makeNCounter = Array(N).fill(0)
    let maxValue = 0
    for(let i =0; i<A.length; i++){
        if(A[i]===N+1){
            makeNCounter.fill(maxValue)
        }
        else{
            makeNCounter[A[i]-1]+=1
            maxValue = Math.max(makeNCounter[A[i]-1],maxValue)   
        }
    }
    return makeNCounter;
}

console.log(solution(5, [3,4,4,6,1,4,6,1,2,3,6]));