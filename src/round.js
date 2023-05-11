
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

    let incorrect = round.incorrectGuesses.length / round.turns 
    let percentIncorrect = incorrect * 100
    let totalCorrect = 100 - percentIncorrect
       return Math.round(totalCorrect)
   }
   
   const endRound = (round) => {
    const score = calculatePercentCorrect(round)
    const message = `**Round over!** You answered ${score}% of the questions correctly!`
    return message
   }

    module.exports = {
    calculatePercentCorrect,
    endRound,
    createRound
    }