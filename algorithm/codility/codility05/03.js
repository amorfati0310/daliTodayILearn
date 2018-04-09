// function solution(S, P, Q) {
//     // A, C, G and T 1,2,3,4
//     const nucleoCode = {
//         A: 1,
//         C: 2,
//         G: 3,
//         T: 4,
//     }
//     const numS = []
//     // 1번 s를 변환하자 -> 숫자로 
//     for(item of S){
//         numS.push(nucleoCode[item]);
//     }
//     console.log('numS',numS);

//     // P랑 Q는 같은 사이즈니까 그 사이즈 만큼 돌면서 
//     const result = []

//     for(let i =0; i<P.length; i++){         
//         const range = new Set(numS.slice(P[i],Q[i]+1))
//         const minCode = {
//         }
//         range.forEach(v=>{   
//             minCode.min = minCode.min ? Math.min(minCode.min, v) : minCode.min = v    
//         })
//         result.push(minCode.min);
//     }
//     return result;

//     // write your code in JavaScript (Node.js 8.9.4)
// }



// solution('CAGCCTA', [2, 5, 0],[4, 5, 6])


function solution(S, P, Q) {
    // A, C, G and T 1,2,3,4
    const nucleoCode = {
        A: 1,
        C: 2,
        G: 3,
        T: 4,
    }
    const numS = []
    // 1번 s를 변환하자 -> 숫자로 
    for(item of S){
        numS.push(nucleoCode[item]);
    }
    console.log('numS',numS);

    // P랑 Q는 같은 사이즈니까 그 사이즈 만큼 돌면서 
    const Opener = {

    }
    const Closer = {

    }
    P.reduce((ac,c,ci)=>{
        ac[c]=ci
        return ac;
    }, Opener)
    Q.reduce((ac,c,ci)=>{
        ac[c]=ci
        return ac;
    })
    const setP = new Set(P);
    const setQ = new Set(Q);
    console.log('dicP', Opener);
    const result = {}
    console.log('result', result);
    for(let i =0; i<numS.length; i++){  
        debugger;
        if(result[i]){
            if(result[i].close===true){
                result[i].min = Math.min(result[i].min, numS[i])
                console.log('result', result);
        }
        }
        if(setP.has(numS[i])){
            result[Opener[numS[i]]] = {};
            result[Opener[numS[i]]].close = true
            result[Opener[numS[i]]].min =numS[i]
            console.log('result', result);
        } 
        if(setQ.has(numS[i])){   
            debugger;
            result[numS[i]] = {}
            
            result[Closer[Q[i]]].min = Math.min(result[numS[i]].min, numS[i])
            result[Closer[Q[i]]].close = false
            console.log('result', result);
        }
    }
    console.log('result', result);
    return result;

    // write your code in JavaScript (Node.js 8.9.4)
}



solution('CAGCCTA', [2, 5, 0],[4, 5, 6])









