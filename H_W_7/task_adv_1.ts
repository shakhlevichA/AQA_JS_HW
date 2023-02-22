//Для решения задач используйте циклы **`for`** или **`for of`**
//Реализуйте функцию которая будет проверять, является ли слово палиндромом.



function isPalindrome(str:string) {
  return str == str.split('').reverse().join('');
}
console.log(isPalindrome('доход'));
console.log(isPalindrome('параход'));
console.log(isPalindrome(''));
console.log('=====================');

 

function isPalindrome1(str:string) {
  const len = Math.floor(str.length / 2);
  for (var i = 0; i < len; i++)
    if (str[i] !== str[str.length -i -1])
      return false;
  return true;
}
console.log(isPalindrome1('доход'));
console.log(isPalindrome1('параход'));
console.log(isPalindrome1(''));
console.log('=====================');




function isPalindrome2(str: string) {
    str = str.toLowerCase().trim()
  const reverseStr: string =  str.split('').reverse().join('')
  if( str == '' && str === reverseStr) return true
   return false

}
console.log(isPalindrome2('доход'));
console.log(isPalindrome2('параход'));
console.log(isPalindrome2(''));
console.log('=====================');


function isPalindrome3(str: string){
    str = str.toLowerCase().trim()
    const halfLength: number = Math.floor(str.length / 2)
    for(let i = 0; i < halfLength; i++) {
            if(str[i] === str[str.length - 1 - i] ) {
            return true
        }    
    }
    return false
}
console.log(isPalindrome3('доход'));
console.log(isPalindrome3('параход'));
console.log(isPalindrome3(''));
console.log('=====================');