function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    console.log('A',A,'B',B,'K',K);
    // 6 8, 10  return 3
    let result = 0;
    // 첫번째 몫 두번쨰 목
    if(A%K === 0) result+=1 
    if(K){
        let aPortion = parseInt(A/K) 
        let bPortion = parseInt(B/K)
        result += bPortion - aPortion
    }
  
    return result;
}
console.log(solution(0,15,5));
console.log(solution(10,10,5));
console.log(solution(10,10,7));
console.log(solution(10,10,2));
console.log(solution(10,10,0));