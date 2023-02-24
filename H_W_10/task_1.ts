//Создайте класс Car.

// Создайте два дочерних класса SportCar и LuxuryCar. 

//Конструкт родительского класса принимает переменные марку авто и тип двигателя.

// Дочерние классы должны иметь 
//методы выводящие максиальную скорость и цену на соответсвующие типы авто. 
//Выводящий текст должен быть таким:
// `This is <carName>. It has <engineType> engine and max speed equal to <maxSpeed>. Approximetly cost of the car is <carCost>`.
// (В задании используйте не только public модификатор, где это возможно)

class Car{
   protected brandCar: string;
    protected engineType: number;

    constructor(brandCar: string, engineType: number){
        this.brandCar = brandCar;
        this.engineType = engineType;

    }
}

class LuxuryCar extends Car{
    private maximumSpeed: number;
    private price: number ;

    constructor(brandCar: string, engineType: number, maximumSpeed:number, price: number){
        super(brandCar,engineType);
        this.maximumSpeed = maximumSpeed;
        this.price = price;
    }
    logInfa(){
     console.log(`This is ${this.brandCar}. It has ${this.engineType} engine and max speed equal to ${this.maximumSpeed}. Approximetly cost of the car is ${this.price}`);
     
   }
}

class SportCar extends Car{
   private maximumSpeed: number;
   private price: number ;

    constructor(brandCar: string, engineType: number, maximumSpeed:number, price: number ){
        super(brandCar,engineType)
    this.maximumSpeed = maximumSpeed;
    this.price = price;
    }
    logInfa(){
     console.log(`This is ${this.brandCar}. It has ${this.engineType} engine and max speed equal to ${this.maximumSpeed}. Approximetly cost of the car is ${this.price}`);
     
   }
    
}
    

new SportCar('audi', 3.0, 310, 100000).logInfa()
new LuxuryCar('buick', 6, 240, 80000).logInfa()
