// Используя метод every проверьте то, в массиве сумма цифр квадратов значений четная.

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`. Реализуйте оба варианта, когда результирущее значение true или false

const numbers = [2, 4, 1]
const numFalse = numbers.every(el => (el ** 2) % 2 === 0) 

const falseNum = numbers.every(function(el){
     return (el ** 2) % 2 === 0
 })

const number = [2, 4, 6]
const numTrue = number.every(el => (el ** 2) % 2 === 0) 

const trueNum = number.every(function(el){
     return (el ** 2) % 2 === 0;
 })

console.log(numFalse)
console.log(numTrue)

console.log(falseNum);
console.log(trueNum);

