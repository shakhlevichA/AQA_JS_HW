// Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей
// (в противном случае результат неверный, вывысти, что прислали неверные результаты).
// Жаль что нам присылают результат матча в формате:
// {
// 	team1: "liverpool",
// 	team2: "chelsea",
// 	matchResult: "0:0",
// 	penalty: "10:11"
// }
// ведь нам надо это вывести в консоль словами:
// -кто сколько забил
// -если были пенальти, то счет по ним (свойства в объекте может не быть)
// -результат матча - чья победа/поражение/ничья
// Давайте напишем программу которая будет за нас переводить формат и выводить результат в консоль. 

interface IObjectKeys {
[key: string]: string ;
}



const obj:IObjectKeys = {
    team1: "Liverpool",
    team2: "Chelsea",
    matchResult: "0:0",
    penalty: "11:10"
}
const obj1: IObjectKeys = {
    team1: "Tottenham",
    team2: "Bournemouth",
    matchResult: "3:2",
    
} 
const obj2: IObjectKeys = {
    team1: "Aston Villa",
    team2: "Manchester City",
    matchResult: "3:3",
    
} 
const obj3: IObjectKeys = {
    team1: "Arsenal",
    team2: "Manchester United",
    matchResult: "10:2",
    
} 


function getMatchGoals(obj: IObjectKeys){

    const firstGoals = obj.matchResult.split(":")[0];
    const secondGoals = obj.matchResult.split(":")[1];
    
    if ((+firstGoals<=9) && (+secondGoals <=9)) {
       
        if ("penalty" in obj){
           
            const firstPenalty = (obj.penalty as any).split(":")[0];
            const secondPenalty = (obj.penalty as any).split(":")[1];
            console.log(`Команда "${obj.team1}" забила ${firstGoals} голов, \nКоманда "${obj.team2}" забила ${secondGoals} голов`);
            console.log(`Счёт по пенальти: ${obj.penalty}`);
            calculateWinner(+firstPenalty, +secondPenalty, obj.team1, obj.team2)
        } else {
            console.log(`Команда"${obj.team1}" забила ${firstGoals} голов, \nКоманда"${obj.team2}" забила ${secondGoals} голов`);
            calculateWinner(+firstGoals, +secondGoals, obj.team1, obj.team2);
        }
    } else console.log("Прислали неверные результаты");
}

function calculateWinner(first: number, second: number, team1: string, team2: string) {
    if (first > second) {
        console.log(`${team1} Победила!`);
    }  else if (second > first) {
        console.log(`${team2} Победила!`);
    } else {
        console.log(`Ничья!`);
    }

}

getMatchGoals(obj);
console.log("=====================");
getMatchGoals(obj1);
console.log("=====================");
getMatchGoals(obj2);
console.log("=====================");
getMatchGoals(obj3);