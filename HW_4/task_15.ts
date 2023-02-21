//Попросить пользователя ввести что-либо. 
//Вывести, сколько секунд он писал 
//(с математическим округлением) и сумму всех цифр в тексте
 


const readline = require("readline-sync");
const strat = Date.now()
const result:string= readline.question("Type something: ");

let sumNum  = 0;
let regexResult: (string | number)[] | null;
const regexp = /\d/g;

while(regexResult = regexp.exec(result)) sumNum += +regexResult[0];

result.split('').reduce((accum, current) => accum + (isNaN(+current) ? 0 : +current) , 0)

for (const letter of result) {
    if(!isNaN(+letter)) sumNum += +letter
}



const mm = `${Date.now() - strat}`
const mmMS = (+mm)/1000





console.log(sumNum)
console.log(`${mmMS}sec`)


