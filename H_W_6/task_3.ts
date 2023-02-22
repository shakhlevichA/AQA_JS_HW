//Дан обьект:

// ```javascript
//     const student = {
//         name: 'John',
//         age: 19,
//         isHappy: true
//     }
// ```

//C помощью цикла **for in** вывести в консоль 
//сначала все ключи, потом значения ключей обьекта. 

const student = {
     name: 'John',
     age: 19,
     isHappy: true
}

let allKey = '';    
let allValues = '';
for (const i in student) {
    const key = i as keyof typeof student; 
    allKey += key + ', ';
    allValues += student[key] + ', ';
} 
console.log(`Keys: ${allKey.slice(0, allKey.length - 2)}`);
console.log(`Values: ${allValues.slice(0, allValues.length - 2)}`);
