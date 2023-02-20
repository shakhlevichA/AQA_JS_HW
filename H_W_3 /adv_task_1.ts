// Поменяйте значение переменных местами 
//не создавая дополнительной переменной:

// ```javascript
//     let a = 4
//     let b = 3
// ```

let a = 4
let b = 3

function change(a: number, b: number){
  console.log(a,  b)

  var temp = a;
  a = b;
  b = temp;

  console.log(a, b)
}
change(a , b)



function change1(a: number, b: number){
  console.log(a, b)

  a  = a + b;
  b = a - b;
  a  = a - b;

  console.log(a, b)
}

change1(a, b)

