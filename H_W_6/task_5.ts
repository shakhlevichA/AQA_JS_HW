// Дан обьект:

// ```javascript
//     let salaries = {
//         andrey: 500,
//         sveta: 413,
//         anton: 987,
//         andrey: 664,
//         alexandra: 199
//     }
// ```
// Вычислите среднюю зарплату сотрудников 
//и результат поместите в соответствующую переменную


let salaries = {
        andrey: 500,
        sveta: 413,
        anton: 987,
        Andrey: 664,
        alexandra: 199
    }

function averageSalaryСalcul(obj: object) {
    const members = Object.keys(obj).length
    let allSalaries = 0   

    for(const i in obj) {
        const key = i as keyof typeof obj
        allSalaries += obj[key]        
    }

    let average= allSalaries / members

    return average
}

console.log(averageSalaryСalcul(salaries))

