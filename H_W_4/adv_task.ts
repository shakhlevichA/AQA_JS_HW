// Вывести сообщение пользователю (отображаться должно в несколько строк): 
// "Введите цифру из меню:
// 1. Калькулятор
// 2. Предсказание
// 3. Игра угадай"
// Пользователь должен ввести число от 1 до 3. 
// Если вводится что-то другое, то отображается "Неправильный ввод. Попробуйте еще раз" и то же самое меню (можно использовать console.clear() для очистки консоли).
// ###### В случае выбора 1 пользователю предлагается ввести 2 числа и действие из списка (можно вывести также в виде выбора пунктов меню):
// Сложение
// Вычитание
// Умножение
// Деление
// Возведение в степень
// Остаток от деления 1 числа на 2
// ###### В случае выбора 2 пользователю последовательно предлагается ввести отчество, возраст и 3 любых животных в формате "конь, пёс, жираф". 
// После вопросов вывести:
// Имя вашего отца начинается с <3-5 первых букв отчества>
// Вы родились в *** году
// Вероятно, но не точно, что в прошлой жизни вы были <одно из введенных животных>
// ###### Пользователю предлагается ввести строку (от 5 до 15 символов) или число (от 5 до 15). Далее пользователь должен угадать:
// Число (n): если число больше 20, то берётся 20, рандомно берется число от 1 до n. 
// Строка (n - длина строки): если строка больше 20 символов, то используются только первые 20, рандомно берется символ строки.
// У пользователя n / 3 (округление в большую сторону) попыток угадать число либо символ.
// При правильном ответе: "Поздравляем, Вы выиграли"
// При неправильном: "А вот и нет. Еще варианты?"
// Если закончились попытки, но ответ неправильный: "В этот раз как-то не удалось, заходите еще"


const readline = require("readline-sync");

function mainMenu() {
   const answer: string= readline.question("Введите цифру из меню: \n 1.Калькулятор \n 2.Предсказание \n 3.Игра 'Угадай' \n ") 
   switch(answer) {
    case '1':  calculate() 
                break;
    case '2': prediction ()
                break;
    case '3': playGame()
                break;
    default: console.clear()
            console.log("Неправильный ввод. Попробуйте еще раз")            
            mainMenu()
            
   }
}
mainMenu()


function calculate() {
    const number1: number = +readline.question("Введите первое число: ")
    let menu: number = +readline.question(`Выберете действие : \n 1.Сложение  \n 2.Вычитание \n 3.Умножение \n 4.Деление \n 5.Возведение в степень \n 6.Остаток от деления 1 числа на 2 \n`)
    const number2: number = +readline.question("Введите второе число: ")
    const sum = number1 + number2 
    const minus = number1 - number2 
    const mult = number1 * number2 
    const dev = number1 / number2 
    const pow = number1 ** number2 
    const rest = number1 % number2 
    
    while(menu <= 0 || menu > 6){
        console.clear()
        console.log(`Неправильный ввод. Попробуйте еще раз`) 
        menu = +readline.question(`Выберете действие : \n 1.Сложение  \n 2.Вычитание \n 3.Умножение \n 4.Деление \n 5.Возведение в степень \n 6.Остаток от деления 1 числа на 2 \n`)
    } 
        switch(menu) {
        case 1: console.log(sum)
            break;
        case 2: console.log(minus)
            break;
        case 3: console.log(mult)
            break;
        case 4: console.log(dev)
            break;
        case 5: console.log(pow)
            break;
        case 6: console.log(rest)
            break;        
    }    
}


function getRandomNumber(min:number, max:number) {
    return  Math.floor(Math.random() * (max - min + 1) + min)
}

function prediction () {
    const secondName: string= readline.question("Введите Ваше отчество: ") 
    const age: number= +readline.question("Введите Ваш возраст : ") 
    const animals: string= readline.question("Введите 3 любых животных в формате 'конь, пёс, жираф': ") 

    const secondNameStarts: number = getRandomNumber(3, 5)
    const fatherName: string = secondName.slice(0, secondNameStarts)
    console.log(`Имя Вашего отца начинается ${fatherName}`)

    const date = new Date()
    const actualYear = date.getFullYear()
    const bornYear1 = actualYear - age
    const bornYear2 = actualYear - age - 1
    console.log(`Вы родились в ${bornYear1} году или ${bornYear2} году`)

    const arrFromAnimals = animals.split(',')
    const numforAnimals: number = getRandomNumber(0, 3)
    const randomAnimals = arrFromAnimals[numforAnimals]
    console.log(`Вероятно, но не точно, что в прошлой жизни вы были ${randomAnimals}`)
}


function playGame() {
    let data = readline.question("Введите строку (от 5 до 15 символов) или число (от 5 до 15): ") 
    const regExp = /[1-9]+/g
    let type: string;
    data.match(regExp)? type = 'number' :  type = 'string'
   
    switch(type) {
    case 'number': 
                gameforNumber (data)
                break;
    case 'string': 
                gameforString (data)
                break;
    }
}
    
function gameforNumber (data:number) {   
    data = +data
    data > 15? data = 15 : data
    const randomNumber: number = getRandomNumber(1, data)
    const timesforTry: number = Math.ceil(data / 3)
   
    for(let i=0; i < timesforTry; ++i) {         
        const answer: number = +readline.question("Угадай число: ") 
        if(answer === randomNumber) {
            console.log('Поздравляю! Вы победили!')
            break
        } else {
            i=== timesforTry - 1?  console.log('В этот раз как-то не удалось, заходите еще') :  console.log("А вот и нет. Еще варианты?")            
        } 
        
    } 
}


function gameforString (data:string) { 
    data.length > 15? data = data.slice(0, 15) : data
    const randomNumber: number = getRandomNumber(0, data.length - 1)
    const randomSymbol: string = data[randomNumber]
    const timesforTry: number = Math.ceil(data.length / 3)

    for(let i=0; i < timesforTry; ++i) {       
        const answer: string = readline.question("Guess symbol: ") 
        if(answer === randomSymbol) {
            console.log('Поздравляю! Вы победили!')
            break
        } else {
            i=== timesforTry - 1?  console.log('В этот раз как-то не удалось, заходите еще') :  console.log("А вот и нет. Еще варианты?")            
        }         
    }     
}