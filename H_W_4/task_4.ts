//Дана произвольная строка.
// Реализуйте метод, 
//который проверяет заканчивается ли 
//предложение точкой или нет. 

//Если оканчивается, 
//вывести предложение - 
//`Данное предложение закончено`, 
//если нет, то `В конце предложения не хватает точки`


const givStr = 'я учу typescript!';
if(givStr.endsWith('.')){
    console.log(`Данное предложение закончено`)
}else{
    console.log(`В конце предложения не хватает точки`)
}