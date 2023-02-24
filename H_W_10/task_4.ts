// Опишите интерфейс IElectronics. 
// У интерфейса есть свойства price - число, electrType - строка, manufacturer - строка и метод turnOn.

// Сделать 2-3 класса, например, телефон, электропила и тп, реализующие интрефейс.
// Создать функцию, которая принимает параметром любой класс, реализующий IElectronics
// и выводит 3 свойства и вызывает метод turnOn.

interface IElectronics{
    price: number;
    electrType: string;
    manufacturer: string;
    turnOn():void
}

class Phone implements IElectronics{
    static names = 'Phone';
    price: number;
    electrType: string;
    manufacturer: string;
    

    constructor(price: number, electrType: string, manufacturer: string){
        this.price = price;
        this.electrType = electrType;
        this.manufacturer = manufacturer;
    }
    turnOn() {
        console.log('click')
     }

}

class Laptop implements IElectronics{
    price: number;
    electrType: string;
    manufacturer: string;
    turnOn(): void {
        console.log('click');
    }

    constructor(price: number, electrType: string, manufacturer: string){
        this.price = price;
        this.electrType = electrType;
        this.manufacturer = manufacturer;
    }
}

class Television implements IElectronics{
    price: number;
    electrType: string;
    manufacturer: string;
    turnOn(): void {
        console.log('click');
    }

    constructor(price: number, electrType: string, manufacturer: string){
        this.price = price;
        this.electrType = electrType;
        this.manufacturer = manufacturer;
    }
}
function logElectronics(technique:IElectronics){
    console.log(technique.price, '\n', technique.electrType, '\n', technique.manufacturer), technique.turnOn();
    
}

const phone = new Phone(1000, 'Iphone', 'Chine')
const laptop = new Laptop(3000, 'Macbook', 'America')
const television = new Television(1500, 'LG', 'South Korea')

logElectronics(phone)
logElectronics(laptop)
logElectronics(television)