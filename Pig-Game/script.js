"use strict";
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const current0 = document.querySelector("#current--0");
const current1 = document.querySelector("#current--1");
const dice = document.querySelector(".dice");
const newBtn = document.querySelector(".btn--new");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");

const switchPlayer = function () {
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

let scores, currentScore, activePlayer, playing;

const init = function () {
  dice.classList.add("hidden");
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
  activePlayer = 0;
  playing = true;
};
// UI reset
init();

//Roll dice functionality
rollBtn.addEventListener("click", function () {
  if (playing) {
    const randomNum = Math.floor(Math.random() * 6 + 1);
    dice.classList.remove("hidden");
    dice.src = `dice-${randomNum}.png`;
    if (randomNum !== 1) {
      currentScore += randomNum;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

holdBtn.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      dice.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

newBtn.addEventListener("click", init);
