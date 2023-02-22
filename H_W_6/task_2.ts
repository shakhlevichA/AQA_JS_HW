//Создать любой обьект 
//с двумя ключами и любыми значениями в них, 
//а затем проверить есть ли в обьекте определенный 
//ключ и если есть вывести в консоль **true**

const user = {
    name: 'Andrey',
    age: 30,
    condition: 'tired',
    wantsSleep: true
}
console.log('condition' in user)
console.log('age' in user)