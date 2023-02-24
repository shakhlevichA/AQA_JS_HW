import { Calculator } from "./task_1";



// - Написать 10 положительных и отрицательных тестов (методов) 
// по вызову данных функции, 
//которые в зависимости от переданных аргументов и ожидаемого результата
// выводит либо: что "тест" прошел, либо что "тест" свалился




function additionUnit(arg1: any,sing: string, arg2 :any, expextedResult: any){
    const result = new Calculator().calcul(arg1, sing, arg2)
    if(result === expextedResult) console.log(`PASS`);
    else throw new Error('FAIL')
}
additionUnit(2, '+', 3, 5)

additionUnit(2, '-', 3, -1)

additionUnit(2, '*', 3, 6)

additionUnit(4, '/', 2, 2)

additionUnit(10, '%', 2, 20)

additionUnit('2', '+', 3, 5)

additionUnit(3, '/', 0, "is not divisible by zero")
additionUnit(2, '=', 3, 5)
additionUnit(-2, '+', 3, 1)
additionUnit(2.2, '/', 3.2, 0.68)




























// function count2(num1:number, sign:string, num2:number) {
//   switch (sign) {
//     case '+':
//       return num1 + num2;
//     case '-':
//       return num1 - num2;
//     case '*':
//       return num1 * num2;
//     case '/':
//       if (num2 !== 0) {
//         return num1 / num2;
//       } else {
//         return "is not divisible by zero";
//       }
//     case '%':
//       return (num1 / num2) * 100;
//   }
// }
// console.log(count2(2, '+', 3));
