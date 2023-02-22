// ```javascript
//     const evenNumbers = [2, 4, 6, 8, 10]
//     const oddNumbers = [1, 3, 5, 7, 9]
// ```

// + Соедините два массива чисел в один.
// + В полученном массиве попробуйте найти индекс числа **`8`**

const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]
const newArrNum = evenNumbers.concat(oddNumbers)
console.log(newArrNum.findIndex((val:number) => val === 8));


const evenNumbers1 = [2, 4, 6, 8, 10]
const oddNumbers1 = [1, 3, 5, 7, 9]
const newArrNum1 = [...evenNumbers1, ...oddNumbers1]
console.log(newArrNum1.indexOf(8))