// Дан массив:

// ```javascript
//     const cats = ['Gachito', 'Tom', 'Batman']
// ```

// Выведите в консоль все элементы массива.
//  Сначала через цикл **`for`**, затем **`for of`**.

const cats = ['Gachito', 'Tom', 'Batman']

for (let index = 0; index < cats.length; index++) {
    console.log(cats[index]);
    
}
for (const iterator of cats) {
    console.log(iterator);
    
}
    