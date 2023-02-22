// Есть объект с количеством купюр и монет в кассе:
// ```javascript
// const obj = {1: 45, 2: 7, 5: 10, 10: 23, 20: 51}
// ```
// Пришло 2 покупателя с купюрой 50.
// Первому выдана сдача {2: 3, 5: 2, 20: 1}
// Второму выдана сдача {1: 4, 5: 1, 10: 2, 20: 1}
// Вывести в результате разницу в сумме, отдельно по каждой купюре 


type TObject ={
    [key: string]: number;
}


const money: TObject= {
    1: 45, 
    2: 7, 
    5: 10, 
    10: 23, 
    20: 51}

const customer1: TObject = {
    2: 3, 
    5: 2, 
    20: 1}

const customer2: TObject = {
    1: 4, 
    5: 1, 
    10: 2, 
    20: 1}


function giveChange(cashBox: TObject, customer: TObject) {
    const bill = 50
    let purchase = 0
    for(const i in customer) {
       if(i in cashBox) {
        cashBox[i] -= customer[i]
        purchase += customer[i] * +i
       
       }
    }
    for(const i in cashBox) {
         console.log(`В кассе осталось ${cashBox[i]} по ${i} `)
    }
    const change = bill - purchase
      console.log(`Вы потратили ${purchase} рублей`)
      console.log(`Ваша здача состовляет ${change} рублей`)
    
}


giveChange(money, customer1)
