// Для решения задач используйте циклы **`for`** или **`for of`**

// Есть случайный массив. Сложить и вывести в консоль все индексы элементов:
// строк, содержащих "w"
// чисел > 100
// Подсказка: в функции, которая передается в findIndex второй аргумент - индекс текущего элемента

const arr = ['qq', 'qwq', 'qq', 'qwq', 12, 99, 100, 101, 112]
function checkArray(arr: (string | number)[]): void {
   let strIndexes: number = 0
   const strIndexesArr: number[] = []

   let numIndexes: number = 0
   const numIndexesArr: number[] = []

        arr.findIndex((item, index) => {
            if(typeof item == 'string') {
                if(item.includes('w')) {
                    strIndexesArr.push(index)
                    strIndexes += index                    
                }
            } else if(typeof item == 'number') {
                if(item > 100) {
                    numIndexesArr.push(index)
                    numIndexes += index                    
                }
            }
       
        })
        console.log(`Индексы строк содержащих "w": ${strIndexesArr}, сумма индексов: ${strIndexes}`)
        console.log(`Индексы чисел >100: ${numIndexesArr}, сумма индексов: ${numIndexes}`)
}

checkArray(arr)