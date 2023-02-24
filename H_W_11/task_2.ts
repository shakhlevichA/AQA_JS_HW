// + Реализуйте приложение:
//     + Для приложения используется `https://jsonplaceholder.typicode.com/todos`
//     + Напишите 2 функции `getTodos` & `getTasks`
//         + Функция `getTodos` делает запрос по указанному адресу и забирает данные.
//         + Функция `getTasks` принимает id пользователя и статус задачи (завершена или нет)
//  и возвращает массив объектов c айди и названием задачи, {id:number; title: string}[]
// для всех завершенных или незавершенных (в зависимости от значения параметра) задач 
//         + Вывести полученный результат в консоль

import fetch from "node-fetch";

type RespType = {   
    userId: number,
    id: number,
    title: string,
    completed: boolean        
}


async function getTodos() {   
   try {
        const url = `https://jsonplaceholder.typicode.com/todos`
        const response = await fetch(url) 
        const data = await response.json() as RespType[]   
        return data

    } catch (err: any) {
        console.log(err.message)
    }  
}

const getData = await getTodos()


function getTasks(id: number, completed: boolean ) {
    try {
        const data: RespType[] =  getData as RespType[]
        const tasks: object[] = []
        data.map(item => {
            if( item.userId === id && item.completed === completed) {
                tasks.push(item)
            }
        })
        return tasks 
        
    } catch (err: any) {
        console.log(err.message)
    }  
}
console.log(getTasks(1, false))
console.log(getTasks(4, true))










