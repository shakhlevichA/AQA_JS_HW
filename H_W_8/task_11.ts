// Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет', }.
// Запишите соответствующие значения в переменные name, surname и age.
// Сделайте так, чтобы, если какое-то значение не задано - оно принимало следующее значение по умолчанию:
// {name: 'Аноном', 'surname': 'Анонимович', 'age': '? лет'}.

// еализуйте решение двумя способами, используя `function declaration` & `arrow function`. -->

type TObj = {
    [key: string]: string ;
}
const person: TObj =  {name: 'Петр', surname: 'Петров', age: '20 лет', }
const person2: TObj =  {surname: 'Петров', age: '20 лет', }
const person3: TObj =  {}


function ourObject(obj: TObj) {
let {name = 'Аноном', surname = 'Анонимович', age = '? лет'} = obj

console.log(`name: ${name}, surname: ${surname}, age: ${age}`)
}

const ourObject2 = (obj: TObj) => {
let {name = 'Аноном', surname = 'Анонимович', age = '? лет'} = obj

console.log(`name: ${name}, surname: ${surname}, age: ${age}`)
}

ourObject(person)
ourObject(person2)
ourObject2(person3)