// + Реализуйте функцию, 
//который принимает 3 целочисленных значения a, b, c.
// Функция должна возвращать **true**, 
//если треугольник можно построить со сторонами заданной длины,
// и **false** в любом другом случае.


function triangle(a:number, b:number, c:number){
    if(a + b >= c){
        if(b + c >= a){
            if(c + a >= b){
                return true
            }
        }
    }else return false
    

}

console.log(triangle(5, 5, 11))


