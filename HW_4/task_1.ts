//Пользователь передает через переменную свою фамилию и имя.
// Выведите приветсвие `Привет <Имя> <Фамилия>` 
//5 раз используя для каждого варианта разный регистр

const firstName = 'Andrey'
const lastName = 'Shakhlevich'
console.log(`Привет`, firstName, lastName)
console.log(`Привет ${firstName.toLowerCase()} ${lastName.toLowerCase()}`)
console.log(`Привет ${firstName.toUpperCase()} ${lastName.toUpperCase()}`)
console.log(`Привет ${firstName.toUpperCase()} ${lastName.toLowerCase()}`)
console.log(`Привет ${firstName.toLowerCase()} ${lastName.toUpperCase()}`)
