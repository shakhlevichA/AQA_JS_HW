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

const numArr: number[] = [15, 23, 7, 3]

type TypePost ={
    userId: number,
    id: number,
    title: string,
    body: string
}
    
async function getPosts(num: number) {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const response = await fetch(url)
    const result = await response.json() as TypePost[]
    const id =  result.filter(obj => obj.id === num) 
    console.log(id)     
      
}

function getId(arr: number[]) {
    for(let i = 0; i < arr.length; i++) {
     setTimeout(() => {
        getPosts(arr[i])
        }, 1000 * i)
    }    
}
console.log(getId(numArr))











