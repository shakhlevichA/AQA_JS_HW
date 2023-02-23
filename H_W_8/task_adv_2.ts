// + Изограмма - это слово,
// в котором нет повторяющихся букв, 
//последовательных или непоследовательных. 
//Реализуйте функцию, которая определяет, является ли строка, 
//содержащая только буквы, изограммой.
// Предположим, что пустая строка является изограммой.
// Регистр букв мы игнорируем.

// ```javascript
//     isIsogram("Dermatoglyphics") == true
//     isIsogram("aba") == false
//     isIsogram("moOse") == false // -- ignore letter case
// ``


function isIsogram(str:string){
    return !/(\w).*\1/i.test(str)
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));



function isIsogram1(str:string): boolean {
    let arr = str.toLowerCase().split("");
     for (let i = 0; i< arr.length; i++) {
        let tempArray = arr.slice(0);
        tempArray.splice(i,1);

        for (let j = 0; j<tempArray.length; j++){
            if (arr[i] === tempArray[j]) {
                return false
            }
        }
    }
    return true;
}

console.log(isIsogram1("Dermatoglyphics"));
console.log(isIsogram1("aba"));
console.log(isIsogram1("moOse"));
