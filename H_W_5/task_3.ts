// Написать функцию **trimString** 
//которая в качестве аргумента принимает три параметра:
// + строку
// + значение от
// + значение по
//После вызова функция должна вернуть переданную строку
// обрезанную по значениям от и по

function trimString(str: string, valueFrom: number, valueTo: number){
    return str.substring(valueFrom, valueTo)

}

console.log(trimString('ddddddjjjjjjsssskkkk', 6, 11))


