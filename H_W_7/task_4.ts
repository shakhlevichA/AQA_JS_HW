// Дан массив:

// ```javascript
//     const students = ['Polina', 'Dasha', 'Masha']
// ```

// + Удалите последний элемент массива, затем вместо него добавьте в массив студента `Borya`.
// + Удалите первый элемент массива, затем вместо него добавьте в массив студента `Andrey`.
// + Полученный результат не забудьте вывести в консоль.


const students = ['Polina', 'Dasha', 'Masha']
students.pop();
students.push(`Borya`);
students.shift();
students.unshift(`Andrey`)

console.log(students);
