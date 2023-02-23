// Есть массив кандидатов, например: 
// { name : 'John', reviews: Map[['Mark', 5.8], ['Joshua', 9.3]]}
// { name : 'Bob', reviews: Map[['Mark', 5.9], ['Joshua', 9.0]]}
// { name : 'Thomas', reviews: Map[['Mark', 4], ['Joshua', 10]]}
// И коллекция ревьюверов: Map[['Mark', 7], ['Joshua', 8]]
// Нужно нанять только 1 кандидата, каждый ревьювер выставил кандидату оценку
// Также каждый ревьювер имеет свою компетенцию в баллах, 
// которая показывает, как сильно его оценка влияет на результат
// Вычислить, кто из кандидатов все-таки будет принят

const candidats: object[] = [{ name : 'John', reviews: new Map([['Mark', 5.8], ['Joshua', 9.3]])},
{ name : 'Bob', reviews: new Map([['Mark', 5.9], ['Joshua', 9.0]])},
{ name : 'Thomas', reviews: new Map([['Mark', 4], ['Joshua', 10]])}]

const reviewers: Map <string, number> = new Map ([['Mark', 7], ['Joshua', 8]])

function checkCandidats(candidats: object[], boss: Map <string, number>) {
  const reviewers = Object.fromEntries(boss)

  candidats.forEach(item=> {
  (item as any).result = 0;
  (item as any).reviews = Object.fromEntries((item as any).reviews)
  
    for(const key in (item as any).reviews)  {
       if(key in reviewers)   {
        (item as any).result += (item as any).reviews[key] * reviewers[key]
      }   
    }
  })
         const winner = candidats.reduce((acc, val) =>(acc as any).result > (val as any).result? acc: val)
         return ( winner as any).name
}

console.log(checkCandidats(candidats, reviewers))


