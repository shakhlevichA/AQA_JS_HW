// Для решения задач используйте циклы **`for`** или **`for of`**
// Дан массив:

// ```javascript
//    const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
// ```

// Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные. Оба массива затем выведите в консоль. 

const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
const positiveNum:number[] = []
const negativeNum:number[] = []
for (const vol of mixedNumbers) {
    if (vol <= 0){
        negativeNum.push(vol);
    }else{
        positiveNum.push(vol)
    }
}
console.log(positiveNum);
console.log(negativeNum);
