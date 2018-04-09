function solution(X, A) {
    const setInstance = new Set();
  
    return A.reduce((prev, curr, idx) => {
      if (!(setInstance.has(curr))) setInstance.add(curr);
      console.log('prev === -1 && setInstance.size', prev === -1 && setInstance.size === X ? idx : prev)
      return prev === -1 && setInstance.size === X ? idx : prev;
    }, -1)
  }

console.log(solution(5, [1, 3, 1, 4, 2, 7,8, 5, 4, 6]));
console.log(solution(5, [3,4]));