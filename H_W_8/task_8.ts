// Используя коллекцию **`Map`** создайте список ингредиентов к салату с количеством необходимым для добавления в салат.
// Например: Огурцы - 300, помидоры - 200, соль - 10, сметана - 110
// Выведите все продукт, количество которых больше 100 гр.

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

const  salad = new Map([['огурцы', 300], ['помидоры', 200], ['соль', 10], ['сметана', 110],])

const ingredients = salad.forEach((el, key) => {
    if(el > 100)
    console.log(`${key} - ${el}`);
    
})

const ingredientsSalad = salad.forEach(function(el, key){
    if(el > 100)
    console.log(`${key} - ${el}`);

})


