## 코딜리티 03


### 여기서.. 다 P 값을 집어넣었었는데 Math.min비교하는 구문을 안에다 집어 넣는 것이 좋을 듯 합니다 !
```
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    // A -> P
    let P = [];
    let plusRest = 0;
    let minusRest = A.reduce((a, b) => a + b);
    let diff;
    A.forEach(val => {
        plusRest += val
        minusRest -= val
        diff = Math.abs(plusRest - minusRest);
        P.push(diff);
    });
    P = P.slice(0, P.length - 1);
    return Math.min(...P);
}
solution([3, 1, 2, 4, 3])

```