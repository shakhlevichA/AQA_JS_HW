//Создать любой обьект с двумя ключами
// и любыми значениями в них, 
//а затем удалить ключи из обьекта.

const obj = {
    name: 'Andrey',
    age: 30
}

delete (obj as any).age;
delete (obj as any).name;

console.log(obj);
 