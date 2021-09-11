'use strict';
let randNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const guess = document.querySelector('.guess');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guess.value);

  //When there is no input
  if (!guess) {
    message.textContent = '⛔ No Number';

    //When player wins
  } else if (guess === randNumber) {
    message.textContent = '✅ Correct Number';
    number.textContent = randNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== randNumber) {
    if (score > 1) {
      message.textContent = guess > randNumber ? '📈 Too high' : '📉 Too low';
      score--;
      score.textContent = score;
    } else {
      message.textContent = '😬 You lost the game!';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  randNumber = Math.floor(Math.random() * 20 + 1);
  score = 20;
  message.textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
  number.textContent = '?';
  score.textContent = score;
  guess.value = '';
});
