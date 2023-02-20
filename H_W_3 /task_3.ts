// ```javascript
//     let count = 42
//     let userName = '42'
// ```

// Создайте две переменные. 
//Поместите в них переменную **`count`** 
//и превратите в строку, 
//а **`userName`** наоборот в число.
// Попробуйте реализовать задачу двумя разными способами.



let count = 42;
console.log(count)

let countString = String(count)
console.log(countString)

let countString1 = ''+count;
console.log(countString1)

let countString2 = `${count}`
console.log(countString2)

let countString3 = count.toString()
console.log(countString3)


console.log()


let userName = '42'
console.log(userName)

let userNameNumber =  +userName
console.log(userNameNumber)

let userNameNumber1 = Number(userName)
console.log(userNameNumber1)

let userNameNumber3 =  parseFloat(userName)
console.log(userNameNumber3)