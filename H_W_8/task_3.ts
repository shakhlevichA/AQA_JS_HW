// С помощью метода **`filter`** создайте новый массив в котором не будет отрицательных чисел.

// ```javascript
//     const numbers = [7, -4, 32, -90, 54, 32, -21]
// ```

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

const numbers = [7, -4, 32, -90, 54, 32, -21]

const positiveNum = numbers.filter(el =>  el >= 0 )
const posNum = numbers.filter(function(el){
    return el >= 0;
})
console.log(positiveNum);
console.log(posNum);
