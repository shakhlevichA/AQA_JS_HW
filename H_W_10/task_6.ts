// ! Для enum можно использовать Object.values
// Есть таблица:
// [/*[Товар, Скидка в процентах, Цена без скидки], 
//*/['Огурец', 10, 6.4], ['Помидор', 8, 9], ['Молоко', 5.6, 3.3],
// ['Кефир', 1, 2.4], ['Соль', 0, 1.09], ['Сахар', 50, 5]]
// Описать enum, где содержатся все доступные товары (числовой или строковый, по желанию)
// Описать функцию, которая принимает параметром один из элементов енама и массив 
//(тип [string, number, number][]) и возвращает сумму со скидкой для этого товара


// const onSale = [['Огурец', 10, 6.4], ['Помидор', 8, 9], ['Молоко', 5.6, 3.3], ['Кефир', 1, 2.4], ['Соль', 0, 1.09], ['Сахар', 50, 5]]


type TypeArr = [string, number, number][]

const supply: TypeArr = [['Огурец', 10, 6.4], ['Помидор', 8, 9], ['Молоко', 5.6, 3.3], ['Кефир', 1, 2.4], ['Соль', 0, 1.09], ['Сахар', 50, 5]]

enum DiscountProd {
    Огурец,
    Помидор,
    Молоко,
    Кефир,
    Соль,
    Сахар
}
function calcDiscount(product: number, arr:TypeArr ) {
  let food = arr.filter(( _, index) => {    
      return index === product
  }).flat()

  const productName: string = food[0] as string   
  const discont: number = food[1] as number
  const price: number = food[2]  as number

  let finalyPrice: number = price -  (price / 100 * discont )
  finalyPrice = +finalyPrice.toFixed(2)

  return `${productName} стоимость со скидкой ${finalyPrice}`
}

console.log(calcDiscount(DiscountProd.Огурец, supply))
