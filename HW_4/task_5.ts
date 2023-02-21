//Дана строка 'я учу typescript!'.
// Вырежите из нее слово 'учу' и слово 'typescript'
// разными способами (через substring, slice).



const givStr = 'я учу typescript!';

const sliceStr = givStr.slice(2,6);
const sliceStr1 = givStr.slice(6,16);

const subStr = givStr.substring(6,2);
const subStr1 = givStr.substring(16,6);

console.log(sliceStr,sliceStr1)

console.log(subStr1, subStr)