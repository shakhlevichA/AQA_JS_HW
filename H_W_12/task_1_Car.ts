// Создайте абстрактный класс родитель Car 
//и два класса дочерних (любые 2 марки машины), 
// cразнесенных по разным модулям. 
// Класс Car включает:
// - абстрактные поля: 
//максимальный объем топливного бака,
// расход топлива на 100км,
// запас топлива (`fuelReserve`) 

//- поля инициализируются в конструкторе дочерних классов

// - метод `drive` (не абстрактный), 

//который принимает расстояние в км, 

// отнимает от `fuelReserve` количество затраченного топлива,

// в случае, если расстояние невозможно проехать 
// с текущим запасом топлива, вызывается другой метод
// - `refuel` (заправиться) столько раз, 
// сколько необходимо для того, чтобы проехать расстояние

// Метод `refuel` имеет необязательный параметр количества топлива.
// Если он не указан, то заправляется полный бак
import { FuelCost } from './task_2 _enum'
import { readFileSync } from 'fs'

export abstract class Car {
  protected  readonly abstract maxFuelTank: number;
  protected  readonly abstract fuelConsumption: number;
  protected  abstract fuelReserve: number;
  protected  readonly fuelType: FuelCost;
 protected readonly abstract carName: string;

  constructor(fuelType: FuelCost) {
    this.fuelType = fuelType

    }

public drive(distance:number){
    let litersForDistance = distance / this.fuelConsumption;
    if(litersForDistance < this.fuelReserve){
        return `Fuel is sufficient for this ${distance} distance  `
    }else{
        return this.refuel(litersForDistance)
    }
}
 
private refuel(liters?: number) {
    liters === undefined ? liters = this.maxFuelTank / 2 : liters
    let sumLiters = liters * this.fuelType
    let result = 0;
    let quantity = 0;
  if( liters > this.maxFuelTank){
    quantity = (liters - this.fuelReserve)/ this.maxFuelTank
    result = Math.ceil(quantity)
    return ` You have to refuel ${result} times. Fuel charge ${sumLiters} `
  }else {
    result = liters * this.fuelConsumption;
    return ` fuel enough for ${result} km`
  }
  
}


 public getCost(completion: string){
    const comp = readFileSync('price/' + this.carName + '.txt').toLocaleString().split('-')
    const compInfo = comp.find(key => key.includes(completion))
   if(compInfo){
     return  (compInfo.match(/\d+/) as RegExpExecArray)[0];
   }else{
    console.log('this car is not on sale')
   }
      
 }
    
 }

























