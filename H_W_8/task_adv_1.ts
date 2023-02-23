// Тролли атакуют наш раздел с комментариями!!!
// + Единственный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.
// + Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными.
// + Например, строка «This website is for losers LOL!» станет "Ths wbst s fr lsrs LL!".

// > Примечание: для этой задачи **`y`** не считается гласной.

const comment = 'webysite'

const deleteVowels = (str:string) => str.replace(/[aeiou]/gi, '')

console.log(deleteVowels(comment))


const example = 'This website is for losers LOL!'

function deleteVowels1(str: string): string {
    const regExp = /[aoeiu]/gi
    return str.replace(regExp, '')
}

console.log(deleteVowels1(example))