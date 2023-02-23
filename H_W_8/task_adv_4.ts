// Написать функцию, которая принимает: 
// массив чисел
// объект {from: number, to: number, includeFrom?: boolean, includeTo?: boolean}
// Вернуть true, если все числа из массива входят в диапазон
// includeFrom и includeTo показывают, включать from и to в диапазон или нет



type ObjType = {
    from: number, 
    to: number, 
    includeFrom?: boolean, 
    includeTo?: boolean
}

const obj: ObjType = {
    from: 3, 
    to: 25, 
    includeFrom: false,
    includeTo: false
}

const numbers = [4, 9, 19, 22, 23, 24]
const numbers2 = [3, 9, 19, 22, 23, 24]

function checkArray(arr: number[], obj: ObjType) {
  let {from, to, includeFrom, includeTo} = obj
    if (includeFrom === false){from++ }
     else if (includeTo === false){ to-- }
 return arr.every(item => item >= from && item <= to)
}

console.log(checkArray(numbers, obj));
console.log(checkArray(numbers2, obj));