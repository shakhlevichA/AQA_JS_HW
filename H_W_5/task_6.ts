//Напишите функцию **fooboo**
// которая принимает в качестве аргумента три параметра:

// + булевое значение
// + функцию **foo** которая выводит в консоль свое имя
// + функцию **boo** которая выводит в консоль свое имя

//> Если переданное булевое значение **true** 
//запускаем функцию **foo** иначе **boo**

function fooBoo(bool: boolean, foo:()=>void, boo:()=> void){
    
bool ? foo() : boo();
}
function foo() {
console.log(foo.name)
}
function boo() {
console.log(boo.name)
}
fooBoo(true, foo, boo);
fooBoo(false, foo, boo);

//Второй вариант для тогоБ что бы наглядно увидеть разницу.
function fooBoo2(bool: boolean, foo2:()=>void, boo2:()=> void){
    if(bool == true){
        foo2()
    }else boo2()
}
function foo2() {
console.log(foo.name)
}
function boo2() {
console.log(boo.name)
}
fooBoo2(true, foo2, boo2);
fooBoo2(false, foo2, boo2); 

