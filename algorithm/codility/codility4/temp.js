function solution(A) {
    const positive = A.filter(v => v > 0);
    if (!(positive.length)) return 1;
   
    const set = new Set(positive);
    console.log('a', [...Array(set.size)])
    const checker = Array.from(set).reduce(
      (prev, curr) => {
          debugger;
        if (curr <= set.size) prev[curr-1] = curr;
        return prev;
      },
      [...Array(set.size)]
    )
  
    for ([k, v] of checker.entries()) {
      if (!(v)) return k + 1;
    }
    
    return checker.length + 1;
  }
  console.log(solution([1,2,4,5,6]));