// Используя метод **`find`** найдите в массиве первое четное число.

// ```javascript
//     const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
// ```
const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]

const evenNum = numbers.find(el => el % 2 === 0)

const eveNum = numbers.find(function(el){
    return el % 2 === 0;
})
console.log(evenNum);
console.log(eveNum);
