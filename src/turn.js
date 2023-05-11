const {evaluateGuess} = require('../src/card')

const takeTurn = (guess, round) => {
    
    let response = evaluateGuess(guess,round.currentCard.correctAnswer)
    if (response === 'incorrect!'){
    round.incorrectGuesses.push(round.currentCard.id)
    }

    round.turns += 1
    round.currentCard = round.deck[round.turns]

    //
  

    ////turns and current card start at 0 and are always on the same number so round.turn can represent the index of the card we're on
   return response
}

module.exports = {
    takeTurn,
    }