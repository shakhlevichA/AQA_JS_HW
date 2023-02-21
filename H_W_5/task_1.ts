// Написать функцию **getSum**,
// которая будет высчитывать сумму чисел от нуля,
// до параметра, который мы в неё передаем. 

//> Если передадим число 100 то,
// надо вычислить сумму чисел от 0 до 100 (должно получится 5050)

function getSum(anyNum: number) {
    console.log( anyNum * (anyNum +1) /2)
}

const getSum1 = (anyNum: number)=>console.log(anyNum * (anyNum +1) /2);

getSum(100) 
getSum1(100) 