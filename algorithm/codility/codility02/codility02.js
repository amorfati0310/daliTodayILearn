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
//
function solution2(A) {
    let dic = {};
    for (let i = 0; i < A.length; i++) {
        if (!(A[i] in dic)) dic[A[i]] = 1;
        else dic[A[i]] += 1;
    }
    for (let key in dic) {
        if (dic[key] % 2 === 1) return Number(key);
    }
}


function solution3(a) {
    // write your code in JavaScript (Node.js 8.9.4)

    const converted = a.reduce((obj, v) => {
        obj[v] ? delete obj[v] : obj[v] = v
        return obj;
    }, {})
    console.log('converted', converted);
    for (key in converted) {
        return parseInt(key);
    }
}

function solution(A) {
    const result = A.reduce(
        (prev, curr) =>
        ((prev[curr] ? delete prev[curr] : prev[curr] = true), prev), {}
    )
    return Number(Object.keys(result)[0]);
}

function solution(A) {
    return A.reduce((prev, cur) => {
        return prev ^= cur;
    })
}