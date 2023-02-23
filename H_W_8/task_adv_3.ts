// Пользователь вводит что-либо. 
// Посчитать и вывести сумму цифр в тексте (используя Array.from, reduce)
// По 1, 2 и 3 символам в введённой строке вывести общее количество таких символов


 
const str = '11 j2k2k k3'
const strNum = str.replace(/[^0-9]/g,"")
const arr = Array.from(strNum).map(i => Number(i))
const initVal = 0;
const sumNumArr = arr.reduce((acc, val) => acc + val, initVal)


function calculateIntegers(str: string) {
    const regExp = /\d/g
    let count = 0
    let match:any
    while(match = regExp.exec(str)) {
        count += +(match as RegExpExecArray)[0] 
    }
    return count
}

function calculateIntegers2(str: string) {
  const strArr = str.split('')
  return  strArr.reduce((acc, value) => {
    return isNaN(+value)? acc : acc + +value
   }, 0)
}


console.log(sumNumArr)
console.log(calculateIntegers(str))
console.log(calculateIntegers2(str))

