// У нас есть список постов на сервере.
// И наша задача отрисовать текст этих постов на странице.

// Но по каким то необъяснимым причинам, 
//нам требуются посты номер 3, 7, 15, 23. 
//Выглядит просто. Но есть нюанс 🐒 

// Посты должны загружаться в определенном порядке.
// Сначала 15, потом 23, потом 7 и только потом 3. 
//А если какой-то из постов не загрузиться, нам тогда необходимо  вывести в консоль ошибку.

// Наша задача должна иметь универсальное решение.
// В любой момент может потребоваться загрузить другие посты, или больше постов или меньше.

// Для получения постов использовать https://jsonplaceholder.typicode.com/posts
// Задача может быть выполнена через https://jsonplaceholder.typicode.com/comments?postId=1
// либо через setTimeout.
// ###### Реализуйте задачу двумя способами:
// - Promise chaining
// - Async / await
import fetch from "node-fetch";

const numArr: number[] = [15, 23, 7, 3];

type TypePost ={
    userId: number,
    id: number,
    title: string,
    body: string
}

function showPost(num: number){
    const promise = new Promise ((res, rej) => {    
        const url = 'https://jsonplaceholder.typicode.com/posts'
        res(fetch(url))
    
        const errMessage = new Error('Something wrong') 
        rej(errMessage)
    } )

    .then(res => (res as any).json())
    .then(res => res as TypePost[])
    .then(res => res.filter(obj => obj.id === num))
    .then(res => {
    if(res.length == 0) {
        console.log('This post doesnt exist')
    } else {
        console.log(res)
    }
    })

    .catch((reject: Error) => console.log(new Error('Error')))
}

function getId(arr: number[]) {
    for(let i = 0; i < arr.length; i++) {
    setTimeout(() => {
       showPost(arr[i])
        }, 1000 * i)
        }    
}

getId(numArr)


