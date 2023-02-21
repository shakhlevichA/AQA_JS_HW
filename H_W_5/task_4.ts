// Написать функцию **getSumNumbers**,
// которая будет принимать число и вычислять сумму цифр
//  из которых состоит число.

// > Для 2021 это будет 5.



function getSumNumbers( num:number){
    const arr = ("" + num) .split('')
    const arrN = arr.map(function(e){ return parseInt(e)})
    const sumArr = arrN.reduce(function(a, b){return a + b})
    console.log(sumArr) 
   
}
getSumNumbers(2021)


function getSumNumbers1(num:number){
  let arr =("" + num) .split('')
  .map(function(e){return parseInt(e)})
  .reduce(function(a,b){return a+b})
 console.log(arr)
}
getSumNumbers1(2022)


function getSumNumbers2(num: number) {
    let accum = 0
     while(num !== 0){
        let rest = num % 10        
        accum += rest       
        num = Math.trunc(num / 10)                
    }     
    console.log(accum);
     
}
getSumNumbers2(2021)
