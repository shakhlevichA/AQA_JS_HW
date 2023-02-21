//Выведите дату сегоднешнего
// дня в формате: 
//"текущая дата: месяц/год/день.
// Текущее время часы:минуты:секунды.". 
//Использовать только внутренние методы Date.

const date = new Date();


console.log(`${date.getMonth()}.${date.getFullYear()}.${date.getDate()}\n${date.toLocaleTimeString()}`)
