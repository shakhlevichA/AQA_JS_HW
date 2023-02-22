// Для решения задач используйте циклы **`for`** или **`for of`**
// Создать массив длинной не менее 5,
// из динамически созданных случайных чисел. 
//Далее написать алгоритм который берет все числа
// из исходного массива, 
//возводит их в куб и записывает в новый массив.
// В конце вывести оба массива в консоль.



const arrayRondom:number[] = []
for (let i = 0; i < 5; i++) {
    let min = 1;
    let max = 10;
    arrayRondom.push(Math.floor(Math.random() * (max - min)) + min)
}
console.log(arrayRondom)

const arrRonCube = arrayRondom.map(arrayRondom => Math.pow(arrayRondom, 3))
console.log(arrRonCube);

