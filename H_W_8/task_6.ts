// Используя метод **`some`** проверьте то, в массиве есть элемент кратный 3 и 5.

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`. Реализуйте оба варианта, когда результирущее значение true или false
const numbers = [5, 9, 13, 15, 24, 54, 10, 13, 99, 1, 5]


const someNum = numbers.some( el => el % 3 ===0 && el % 5 === 0)


const numSome = numbers.some( function(val){
    return val  % 3 ===0 && val % 5 === 0;
}
)

console.log(someNum);
console.log(numSome);

