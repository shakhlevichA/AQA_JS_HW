// Напишите самовызыввающиеся функцию 
//подсчет факторила числа:
// число должно передаваться как параметр функции

function fact(n: number): number {
   return n === 1 ? 1 : n * fact(n-1);
}
function fact2(n: number): number{
    if(n === 1) return 1; else return n * fact(n-1);
}
console.log(fact(4))
console.log(fact2(3))