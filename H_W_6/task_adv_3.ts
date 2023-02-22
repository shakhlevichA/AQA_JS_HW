// Дан объект cat. 
//Склонируйте его 2 способами,
// и подтвердите, что при изменении поля в 1ом объекте, 
//это же поле не меняется во втором и третьем объекте. 
//Объекты должны быть описаны с помощью типа или интерфейса

// ```javascript
// const cat = {
//       name: 'Енчик',
//       age: 3,
//    }
// ```

type TAnyCat ={
    name: string,
    age: number
}

const cat:TAnyCat = {
      name: 'Енчик',
      age: 3,
   }
const cloneCat:TAnyCat = {...cat}
cloneCat.age = 15;

const cloneCat2:TAnyCat = Object.assign({}, cat)
cloneCat2.age = 10;

console.log(cat.age);
console.log(cloneCat.age);
console.log(cloneCat2.age)

