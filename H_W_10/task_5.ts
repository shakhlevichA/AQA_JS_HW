// Опишите статическую функцию класса, которая принимает Generic параметр одного из типов:
// boolean, number или string. 
// И возвращает:для boolean: противоположное значение

// для string: если в строке есть скобки, то вывести, не забыли ли закрыть скобку,
// если нет - `скобок нет`

// для числа n: целое число, квадрат которого наиболее 
// близок к n (`1 для n=1,2,3`, `2 для n=4,5,6,7,8`, `3 для 9,10,11...`)
// Проверить функцию на все 3 типа

class TheClass <T> {
    element: T;

    constructor(element: T) {
        this.element = element
    }

 static showResult <T>(value: T){
        switch(typeof value) {
            case 'boolean': return !value
                break;
            case 'number':
                return Math.round(Math.sqrt(value))
                break;
            case 'string':
                if(value.includes('(') || value.includes(')')) {
                    return `Hе забыли ли закрыть скобку?`
                } 
                return `скобок нет`
        }
    }
}

console.log(TheClass.showResult(true))
console.log(TheClass.showResult(5))
console.log(TheClass.showResult(50))
console.log(TheClass.showResult('qwerty'))
console.log(TheClass.showResult('(qwerty)'))

