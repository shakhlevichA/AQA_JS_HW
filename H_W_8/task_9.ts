// Используя коллекцию **`Set`** создайте массив неповторяющийхся значений:
// ```javascript
//     const numbers = [1, 6, 3, 2, 7, 325, 234, 54, 586, 23, 24, 64, 56, 3, 5, 7, 8, 1, 6, 8, 9, 4, 5, 61, 2, 4, 5, 6, 3, 5]
// ```

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

const numbers = [1, 6, 3, 2, 7, 325, 234, 54, 586, 23, 24, 64, 56, 3, 5, 7, 8, 1, 6, 8, 9, 4, 5, 61, 2, 4, 5, 6, 3, 5]

const setNum = new Set(numbers)
const  newArr = Array.from(setNum) 
console.log(newArr)



function repeatingNumbers(arr: number[]) {
    console.log(arr = [... new Set(arr)]);
    
}

const repeatingNumbers2 = (arr: number[]) => [... new Set(arr)]

console.log(repeatingNumbers2(numbers))
repeatingNumbers(numbers)