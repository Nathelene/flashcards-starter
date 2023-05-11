const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const {createCard} = require('../src/card')
const {evaluateGuess} = require('../src/card')
const {createDeck} = require('../src/deck')
const {countDeck} = require('../src/deck')
const {createRound} = require('../src/round')
const {takeTurn} = require('../src/turn')
const {calculatePercentCorrect} = require('../src/round')
const {endRound} = require('../src/round')


function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countDeck(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

function start() {
  const questions = [];
  prototypeQuestions.forEach(question => {
    questions.push(createCard(question.id, question.question, question.answers, question.correctAnswer))
  })
  const deck = createDeck(questions)
  const round = createRound(deck)

  printMessage(deck)
  printQuestion(round)
}

start()

module.exports = { start,printMessage, printQuestion };
