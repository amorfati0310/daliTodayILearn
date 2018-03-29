// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const numbers = [...Array(A.length).keys()].map(x => x + 1)
    A.sort((a, b) => a - b);
    if (A.join('') == numbers.join('')) return 1
    return 0;

}
console.log(solution([...Array(100).keys()].map(x => x + 1)))

function solution2(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const numbers = [...Array(A.length).keys()].map(x => x + 1)
    const numberSet = new Set(numbers)
    const Aset = new Set(A)
    console.log('Sets', Aset, numberSet);
    if (A.join('') == numbers.join('')) return 1
    return 0;

}
console.log(solution2([1, 3, 2]))