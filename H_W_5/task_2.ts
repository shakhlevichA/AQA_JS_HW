// Напишите функцию которая в качестве аргумента принимает
// в себя сумму кредита который хочет получить клиент
// и верните результат переплаты по кредиту:

//+ процентная ставка в год — 17%,
//+ количество лет — 5.


function overpayments(sumCredit: number){
    const years = 5;
    const intRate = 0.17;
    let overpay = 0;
    for(let i = 0, yearPay = sumCredit/years; i < years; i++ ){
        overpay += sumCredit * intRate;
        sumCredit -= yearPay;
}console.log(overpay)
}
overpayments(1000)






