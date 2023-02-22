// Дан массив:

// ```javascript
//     const numbers = [5, 43, 63, 23, 90]
// ```

// Удалите все элементы в массиве и выведите в консоль полученный результат.

// > Реализуйте решение двумя способами.


const numbers = [5, 43, 63, 23, 90]

const spliceNum= numbers.splice(0)
console.log(numbers);



const numbers1 = [5, 43, 63, 23, 90]

for (const key in numbers1) {
    delete numbers1[key]
}
console.log(numbers1);



const numbers3: number[] = [5, 43, 63, 23, 90]
 
while(numbers3.length) {
    numbers3.shift()
}
console.log(numbers3)

const numbers4: number[] = [5, 43, 63, 23, 90]

do {
    numbers4.pop()
} while(numbers4.length)

console.log(numbers4)


