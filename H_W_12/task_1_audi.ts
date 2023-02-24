// Создайте абстрактный класс родитель Car 
//и два класса дочерних (любые 2 марки машины), 
// cразнесенных по разным модулям. 
// Класс Car включает:
// - абстрактные поля: максимальный объем топливного бака,
// расход топлива на 100км, запас топлива (`fuelReserve`) 
//- поля инициализируются в конструкторе дочерних классов
// - метод `drive` (не абстрактный), 
//который принимает расстояние в км, 
// отнимает от `fuelReserve` количество затраченного топлива,
// в случае, если расстояние невозможно проехать 
//с текущим запасом топлива, вызывается другой метод
// - `refuel` (заправиться) столько раз, 
//сколько необходимо для того, чтобы проехать расстояние
// Метод `refuel` имеет необязательный параметр количества топлива.
// Если он не указан, то заправляется полный бак

import { Car } from "./task_1_Car"
import { FuelCost } from "./task_2 _enum";

enum AudiCompletion{
   average = 'Average',
   maximum = 'Maximum',
   limitedEdition = 'Limited Edition'
}

class Audi extends Car{
    public readonly carName = 'audi';
    protected maxFuelTank: number;
    protected fuelConsumption: number;
    protected fuelReserve: number;

     constructor(fuelType: FuelCost, carName: 'audi', maxFuelTank: number, fuelConsumption: number,  fuelReserve: number){
        super(fuelType)
        this.carName = carName;
        this.maxFuelTank = maxFuelTank;
        this.fuelConsumption = fuelConsumption;
        this.fuelReserve = fuelReserve;
     }
}























