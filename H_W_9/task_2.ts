// Написать класс человека, который принимает имя и рост в метрах в конструкторе
// Класс имеет 1 статическое поле: коэффициент длины шага при беге = 0.65
// И 1 статический метод, который принимает рост в качестве параметра и 
// вычисляет длину шага при ходьбе по формуле `Рост / 4) + 0,37`

// Написать в классе геттер для получения длины шага при беге = `коэффициент длины шага * рост`


// И написать метод, `logWalkStep`, который выводит в консоль `Длина вашего шага ${length}`

// вывести в консоль геттер и вызвать `logWalkStep`

class Person{
    name: string;
    growth: number
 static coefStepsForRun: number = 0.65
 static walkingStep(growth: number){    
        let result = (growth / 4) + 0.37
        return result
}

    constructor(name:string, growth: number){  
        this.name = name;
        this.growth = growth
    }
    get stepsForRun(){
        let result = Person.coefStepsForRun * this.growth
        return result

    }

    logWalkStep(){
        let length = Person.walkingStep(this.growth)
        console.log(`Длина вашего шага ${length}`)
    }
}
const man = new Person('Andrey', 170)
console.log(man.stepsForRun);
man.logWalkStep()

