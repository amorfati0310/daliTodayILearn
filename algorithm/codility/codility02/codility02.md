## 코딜리티 02 

꾸준히 사고하는 연습이 중요 다른 사람들 풀이 보면서도 많이 배웁시다.
아쉬운 점 

내 풀이 여러 방식으로 시도를 해봤다. 다른 것 하나만 찾는 것이라고 접근을 했는데 
문제 자체를 제대로 파악하지 못했다. 페어가 아닌 것을 찾는 것이므로  4,4,4 이런 친구들도 찾아서 검출했어야 했다ㅏ. 
reduce를 활용해본 점이 좋았다. 많이 써보니까 이제 return값을 받아서 그 다음 값으로 처리해주는 구조를 이용할 만 한 것 같다



배운 메소드 및 사고 sort, shift, reduce, splice메소드 ... 등 {}객체를 활용
dic을 사용하면 접근 속도가 빠르므로 dic으로 구조화 할 수 있으면 dic으로 최대한 하는 것이 좋다고 생각한다. :D


```
// 필터 메소드로 다른 것만 넣어주는 메소드 근데 -> 복잡도도 높은 편이고 하나만 찾아주는 메소드다 !
console.log(solution([1, 1, 1, 1, 1, 1, 1, 1, 1, 9]));

function solution(arr) {
    // write your code in JavaScript (Node.js 8.9.4)
    while (arr.length > 1) {
        let filterItem = arr[0];
        arr = arr.filter(el => el !== filterItem)
    }
    return arr[0];
}

// 이 역시 왼쪽 오른쪽 찾은 인덱스로 비교했는데 찾으면 바로 탈출해서 조금 더 났지만  하나만일 떄 !
// 그리고 같은 것은 제거해주어야 되서 
function solution2(arr) {
    // write your code in JavaScript (Node.js 8.9.4)
    let result = 0;
    arr.forEach(element => {
        if (arr.indexOf(element) === arr.lastIndexOf(element)) {
            return result = element
        }
    });
    return result;

}

function solution3(a) {
    // write your code in JavaScript (Node.js 8.9.4)

    const converted = a.reduce(function (obj, v) {
        if (!obj[v]) obj[v] = 1;
        else {
            obj[v] = obj[v] + 1
        }
        return obj;
    }, {})
    for (key in converted) {
        if (converted[key] === 1) {
            return parseInt(key);
        }
    }
 
}

```

### 다른 사람들의 풀이 

```
// 객체로 구조화 하고 for문 한 번 탐색으로 쭉쭉 값을 넣어주는 구조 좋았다. 
function solution(A) {
    let dic = {};
    for (let i = 0; i < A.length; i++) {
        if (!(A[i] in dic)) dic[A[i]] = 1;
        else dic[A[i]] += 1;
    }
    for (let key in dic) {
        if (dic[key] % 2 === 1) return Number(key);
    }
}

// reduce를 더 깔끔하게 썼다. 값이 있으면 delete 활용도 :D 
function solution(A) {
  const result = A.reduce(
    (prev, curr) =>
      ((prev[curr] ? delete prev[curr] : prev[curr] = true), prev),
    {}
  )
  return Number(Object.keys(result)[0]);
}


function solution(A) {
  const result = A.reduce(
    (prev, curr) =>
      ((prev[curr] ? delete prev[curr] : prev[curr] = true), prev),
    {}
  )
  return Number(Object.keys(result)[0]);
}


function solution(A) {
    let result = A.shift();
    
    for(item of A){
        result ^= item;
    }
    return result;
}
요렇게 고칠 수도 있겠다 ->
function solution(A) {
    return A.reduce((prev, cur) => {
        return prev ^= cur;
    })
}


Sort를 이용하신 분들도 있었다. 

function solution(A) {
  A.sort(function (a, b) {
    return a - b
  });
  if (A[0] !== A[1]) return A[0];
  if (A[A.length - 1] !== A[A.length - 2]) return A[A.length - 1];
  let count = 0;
  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] === A[i + 1]) {
      count++;
    } else if (count % 2 === 0) {
      return A[i];
    } else {
      count = 0;
    }
  }
}


```

100% 해결을 못 해서 아쉬움 -> 문제를 제대로 파악하지 못한 부분 !
그래도 다른 사람들 해결방식 및 사고 연습은 많이 할 수 있었다. 굳굳 :D 
