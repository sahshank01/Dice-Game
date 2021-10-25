'use strict';

let currentPlayer = null;
const score = [0, 0];
const curr = [0, 0];

function initialize() {
  currentPlayer = 0;
  score[0] = 0;
  score[1] = 0;
  updateScore();
}
initialize();

function processClick() {
  //genetaring random number between 1 to 6
  const diceID = Math.trunc(Math.random() * 6) + 1;
  document.querySelector('.dice').setAttribute('src', `dice-${diceID}.png`);
  if (diceID == 1) {
    curr[currentPlayer] = 0;
    document.getElementById(`current--${currentPlayer}`).innerText =
      curr[currentPlayer];
    processHold();
  } else {
    curr[currentPlayer] += diceID;
    document.getElementById(`current--${currentPlayer}`).innerText =
      curr[currentPlayer];
  }
}

function processHold() {
  score[currentPlayer] += curr[currentPlayer];
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.remove('player--active');
  currentPlayer = 1 - currentPlayer;
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.add('player--active');

  updateScore();
}

function updateScore() {
  document.getElementById('score--0').innerText = score[0];
  document.getElementById('score--1').innerText = score[1];
  curr[0] = 0;
  curr[1] = 0;
  document.getElementById('current--0').innerText = curr[0];
  document.getElementById('current--1').innerText = curr[0];
}

document.querySelector('.btn--roll').addEventListener('click', processClick);
document.querySelector('.btn--hold').addEventListener('click', processHold);
document.querySelector('.btn--new').addEventListener('click', initialize);
