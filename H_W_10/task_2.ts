// Создайте два объекта людей. 
// Реализуйте метод, который выводит строку `My firstName is <firstName>`. 
// И в зависимости от контекста выполнения, 
// этот метод должен выводить соответвующее имя

class Human{
    firstName: string;
    age: number;
    
    constructor(firstName:string, age: number){
        this.firstName = firstName;
        this.age = age;
    }
}
function logFirstName(){
  //@ts-ignore
    console.log(`My firstName is ${this.firstName }`)
    
}

const man = new Human('Barni', 3)
const woman = new Human('Tosya', 2)


logFirstName.call(man)
logFirstName.apply(woman)
logFirstName.bind(man)()