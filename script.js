'use strict';

/* // selecting  elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
//Rolling a dice functionality
btnRoll.addEventListener('click', function () {
  // 1. generating random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //dipsaly dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.jpg`;

  //check for rolled one?

  if (dice !== 1) {
    //add dice to the current score
    currentScore += dice;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
    // current0El.textContent = currentScore;
  } else {
    //switching to the next player
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});

btnHold.addEventListener('click', function () {
  //1. add score to the current player
  //score[1] =score[1] + currrentScore;
  score[activePlayer] += currentScore;
  document.querySelector(`#score--${activePlayer}`).textContent =
    score[activePlayer];
});
*/

// selecting  elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting condition

let score, currentScore, activePlayer, playing;
//function init
const init = function () {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

//funtion to switch to player
const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Rolling a dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. generating random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //dipsaly dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.jpg`;

    //check for rolled one?

    if (dice !== 1) {
      //add dice to the current score
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
      // current0El.textContent = currentScore;
    } else {
      //switching to the next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. add score to the current player
    //score[1] =score[1] + currrentScore;
    score[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      score[activePlayer];
    //2. Toc check if the active player's score >=100

    if (score[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    }
    //switching to the ne xt player
    else {
      switchPlayer();
    }
  }
});

//to reset the game
btnNew.addEventListener('click', init);
