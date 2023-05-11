
const createRound = (deck) => {
    var round = {
        deck: deck,
        currentCard: deck[0],
        turns: 0,
        incorrectGuesses: []
    }
    return round
}
const calculatePercentCorrect = (round) => { 

    let incorrect = round.incorrectGuesses / round.turns 
    let percentIncorrect = incorrect * 100
    let totalCorrect = 100 - percentIncorrect
   
       return Math.round(totalCorrect)
   }
   
   const endRound = (round) => {
    let percentCorrect = calculatePercentCorrect(round)
   
    return `**Round over!** You answered ${percentCorrect}% of the questions correctly!`
   }

module.exports = {

    calculatePercentCorrect,
    endRound,
    createRound
    }