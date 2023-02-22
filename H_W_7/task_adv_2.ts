// Для решения задач используйте циклы **`for`** или **`for of`**
// ```javascript
//     const matrix = [
//         [12, 98, 78, 65, 23],
//         [54, 76, 98, 43, 65],
//         [13, 324, 65, 312],
//         [9092, 22, 45, 90000],
//     ]
// ```

// > Выведите в консоль среднее значение чисел в многомерном массиве.

const matrix = [
        [12, 98, 78, 65, 23],
        [54, 76, 98, 43, 65],
        [13, 324, 65, 312],
        [9092, 22, 45, 90000],
];

function calculateMiddleValue(arr: number[][]){
   const totalArr: number[] =  arr.flat()
   let total: number = 0
   for(const i of totalArr) {
    total += i
   }

   const average = total / totalArr.length
   console.log(average)
}

calculateMiddleValue(matrix)