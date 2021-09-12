"use strict";
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const dice = document.querySelector(".dice");
const newBtn = document.querySelector(".btn--new");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add("hidden");

rollBtn.addEventListener("click", function () {
  const randomNum = Math.floor(Math.random() * 6 + 1);
  dice.classList.remove("hidden");
  dice.src = `dice-${randomNum}.png`;
});
