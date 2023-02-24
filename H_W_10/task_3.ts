//Создайте два объекта машин. 
//Реализуйте метод выводящий количество дверей машины, 
//и с какой стороны находится руль. В зависимости от контекста выполнения,
// этот метод должен выводить соответвующую информацию о машинах. 
//К примеру `This car has 3 doors and this is left-hand drive car`

class Car{
    hasDoors: number;
    positionRudder: string;

    constructor( hasDoors:number, positionRudder:string ){
        this.hasDoors = hasDoors;
        this.positionRudder = positionRudder
    }
    logInfo(){
        console.log(`This car has ${this.hasDoors} doors and this is ${this.positionRudder} drive car`);
    }
}

const audi = new Car( 3, 'left-hand')
const bmw = new Car( 4, 'right-hand') 

audi.logInfo()
bmw.logInfo()