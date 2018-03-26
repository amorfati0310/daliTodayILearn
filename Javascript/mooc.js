// benzen io 가계부

var memory = [];
var total = 0;

var deposit = function (amount, name) {
    if (total + amount < 0) throw new Error('잘 못 입력했어 ')
    total += amount
    var memoryItem = {
        amount,
        name,
    }
    memory.push(memoryItem);
}
var print = function () {
    for (i = 0; i < memory.length; i++) {
        console.log(memory[i])
    }
}
try {
    deposit(100, "월급")
    deposit(200, "용돈")
    deposit(-100, "월세")
    deposit(-300, "보험료")
} catch (e) {
    console.log(e);
}
console.log('total', total);
// print();