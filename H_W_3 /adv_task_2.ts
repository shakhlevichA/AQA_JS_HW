// Написать программу, которая выполняет следующие операции: 

// 1. Запрашивает у пользователя число.
// 2. Последовательно задает вопрос: 
//     cколько отнять / прибавить / умножить / разделить от предыдущего результата?
// 3. По окончании вывести пользователю результат в консоль, содержащий формулу 
//и результат например: 
// > ((((6 - 10) + 5) * 20) / 2 = 110)

const readline = require("readline-sync");
var result:number = readline.question("Ввидите число: ");

const readline1 = require("readline-sync");
var result1:number = readline.question("Сколько отнять?: ");

const readline2 = require("readline-sync");
var result2:number = readline.question("Сколько прибавить?: ");

const readline3 = require("readline-sync");
var result3:number = readline.question("На сколько умножить?: ");

const readline4 = require("readline-sync");
var result4:number = readline.question("Разделить от предыдущего результата?: ");


const extension =((((result - result1) + result2) * result3) / result4 )
console.log(`((((${result} - ${result1}) + ${result2}) * ${result3}) / ${result4} = ${extension})`)






