// Даны два одинаковых обьекта. 
//Сравните их так чтобы они были равны 
//(должно работать при изменении количества и названий свойств объекта)

let student1 = {
        name: 'Polina',
        age: 27,
    }

let student2 = {
        name: 'Polina',
        age: 27,
    }




function compareObjEqual(obj1:{}, obj2:{}) {
    return Object.keys({...obj1, ...obj2}).every(item => obj1[item] === obj2[item])
}

console.log(compareObjEqual(student1, student2))