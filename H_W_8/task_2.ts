// Используя метод **`map`** создайте новый массив,
// на основе массива **`users`**, 
//в котором каждый элемент массива будет содержать строку вида:

// > ['member 1: Darya', 'member 2: Masha', ... etc]

// ```javascript
//     const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
// ```

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']

const listMember = users.map((el, index) => `member ${index +1}: ${el}`)
console.log(listMember);

const listMember1 = users.map(function(el, index){
    return `member ${index +1}: ${el}`
})
console.log(listMember1)