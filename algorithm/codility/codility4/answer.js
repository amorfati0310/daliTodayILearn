function solution(N, A) {
    const makeNCounter = Array(N).fill(0)
    let maxValue = 0
    let fillPointer = 0;
    for(let i =0; i<A.length; i++){
        if(A[i]===N+1){
            fillPointer = maxValue;
        }
        else{
            if(fillPointer > makeNCounter[A[i]-1]) makeNCounter[A[i]-1]=fillPointer
            makeNCounter[A[i]-1]+=1
            maxValue = Math.max(makeNCounter[A[i]-1],maxValue)   
        }
    }
    return makeNCounter.map(v=> v <fillPointer ? fillPointer: v);
}

console.log(solution(5, [3,4,4,6,1,4,6,1,2,3,6]));