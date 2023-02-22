// Дан обьект:

// ```javascript
// const colors = {
//     'ru pum pu ru rum': {
//         red: 'красный',
//         green: 'зеленый',
//         blue: 'синий'
//     },
// };
// ```

// Вывести в консоль слово красный и синий

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};
console.log(`${colors['ru pum pu ru rum'].red} и ${colors['ru pum pu ru rum'].blue}`);

const colors1 = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий',
        log: function(){
            console.log(this.red + ' ' + this.blue)
        }
    },
};
colors1["ru pum pu ru rum"].log()