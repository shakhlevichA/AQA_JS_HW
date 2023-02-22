// Создать валидатор,
// 2 метода: валидатор и логин. 
//Первый метод принимают у пользователя логин и пароль для регистрации.
// Затем данные записать в обьект. 

// Второй метод принимает данные пользователя
// и объект зарегестрированного пользователя.
// Если передан верный логин и пароль, 
//вывести сообщение **Добро пожалоВать**. 

interface IObjectKeys {
    [key: string]: string | number;
}

const obj: IObjectKeys = {}

function getData(obj: IObjectKeys, login: string, password: number) {
    
    obj['login']= login
    obj['password'] = password

    return obj
}

getData(obj, 'user', 3232)

function checkValidData(obj: IObjectKeys, login: string, password: number) {
    
    if( login === obj['login'] && password === obj['password']) {
         console.log('Добро пожалоВать')      
    } else {
        console.log('Проверьте свой логин и пароль');
    }
}

checkValidData(obj, 'user', 3232)
checkValidData(obj, 'user', 3231)
checkValidData(obj, 'user1', 3232)
