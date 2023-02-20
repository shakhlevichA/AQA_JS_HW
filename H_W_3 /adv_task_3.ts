// Написать программу, 
//которая будет выводить в консоль лесенку.

// ```
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
// ```

let i = '#'
while(i <= '######'){
    console.log(i)
     i+='#';
}

for( let i = '#'; i <= '######'; i+='#'){
    console.log(i)
}


let str: string = '';
let pyramid: number = 6;

for (let i: number = 0; i < pyramid; i++) {
    str += '#';
    console.log(str);
}