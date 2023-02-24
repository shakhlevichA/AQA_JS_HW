// Создайте класс Bills в отдельном файле с:

// - приватным static полем, содержащим суммы долгов 

// - публичный static методам getBill (с параметром типа string).
// Возвращает сумму по счету параметра (вроде fuel, flat rent и тд)

// - addBill (параметры string и number). 
// Добавляет к счету string сумму number.

// Создайте enum FuelCost, 
// в котором поместите несколько видов топлива и их цену

// Для каждого класса создайте поле `fuelType`;

// В методе `refuel` добавьте расчет суммы за топливо
// с учетом типа топлива и заправляемого объёма
// (до заправки в машине может оставаться топливо)


export class Bills{
   private static bills: Map<string, number>

   static getBill(billKey: string) {
        return this.bills.get(billKey)
    }

    static addBill(billKey: string, sum: number){
     let vol = this.getBill(billKey)
        
         if(vol === undefined){
             this.bills.set(billKey, vol =  sum )
          }else {
            this.bills.set(billKey, vol! + sum )
          }
   
    }
}
