// Написать класс, принимающий строку (`str`), число (`symNum`) и символ (`sym`)

// создать геттер, который возвращает есть ли в строке `sym`

// геттер, который возвращает символ `symNum` в строке `str`. 
// Если `symNum` больше, чем символов в `str`, возвращает случайный символ
// если допусти symNum = 3, то мне нужно проверить есть ли в строк символ меньше чем 3,
// и в этом случаи вывести случайный символ?


// метод, который принимает коллекцию Map со строками, 
// и возвращает строку `str`, где замененена каждая 0 подстрока из Map на 1
// пример: `str = '123qweasd12', Map([['12', '-'], ['ea', '*']]), result = '-3qw*sd-'`
// вывести все созданные геттеры и поле `str`

class TheClass {
    str: string;
    sym: string;
    symNum: number;

    constructor(str: string, sym: string, symNum: number){
        this.str = str;
        this.sym = sym;
        this.symNum = symNum;
    }
    get getSym():boolean{
       if(this.str.includes(this.sym)){
          return true
       }else{
        return false
       }
       
    }
    get numInStr(){
         if(this.str.length <= this.symNum) 
         return this.str[Math.floor(Math.random() * 
         this.str.length)] 
         else return this.str[this.symNum]
    }  

    getReplaced(replaceValues: Map<string, string>) {
        let result = this.str;
        for (const [key, value] of replaceValues) {
            result = result.split(key).join(value)
        }
        return result
    }
}
const man = new TheClass('123qweasd12', '3', 3)
const map = new Map([['12', '-'], ['ea', '*']])
console.log(man.getReplaced(map));
console.log(man.numInStr)
console.log(man.getSym)
console.log(man)




 