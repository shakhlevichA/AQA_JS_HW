// Дан массив. 
//Запишите второй элемент этого массива в переменную elem2,
// третий - в переменную elem3. 
//Если в массиве нет третьего элемента 
//- запишите в переменную elem3 значение 'eee', 
//а если нет второго - в переменную elem2 запишите значение 'bbb'.
// Первый элемент никуда записывать не надо.

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`. 

type TypeArr = (string | number )[]

const arr1 = [1, 2, 3]
const arr2 = [1, 2]
const arr3 = [1]

function setElements(arr: TypeArr) {
    let elem2 = arr[1] ?? 'bbb'
    let elem3 = arr[2] ?? 'eee'    
    console.log(elem2);
    console.log(elem3);
    
}
setElements(arr1)
setElements(arr2)
setElements(arr3)


const setElements2 = (arr: TypeArr) => {
    let elem2 = arr[1] ?? 'bbb'
    let elem3 = arr[2] ?? 'eee'
    console.log(elem2);
    console.log(elem3);
    
}

setElements2(arr1)
setElements2(arr2)
setElements2(arr3)