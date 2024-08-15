function calculateLevel(wins, defeat) {
    return wins - defeat
}

function determineRanking(Desenpenho) {
    if(Desenpenho <= 10){
        return "ferro"
    
    }else if(Desenpenho >= 11 && Desenpenho <= 20) {
        return "bronze"

    }else if(Desenpenho >= 21 && Desenpenho <= 50) {
        return "prata"

    }else if(Desenpenho >= 51 && Desenpenho <= 80) {
        return "ouro"

    }else if(Desenpenho >= 81 && Desenpenho <= 90) {
        return "diamante"

    }else if(Desenpenho >= 91 && Desenpenho <= 100) {
        return "lendário"
    
    }else if(Desenpenho < 101){
        return "imortal"
    }   
}

wins = 150, 
defeat = 67 
Name = "Tavares"

let Desenpenho = calculateLevel(wins, defeat)
let Level = determineRanking(Desenpenho)

console.log("O herói "+ Name + " de nível " + Level + " está com " + Desenpenho + " vitórias")