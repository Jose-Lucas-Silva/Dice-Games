'use strict';

const elementScore0 = document.getElementById('score-0');
const elementScore1 = document.getElementById('score-1');
const current0 = document.getElementById('current-0');
const current1 = document.getElementById('current-1');

const player0 = document.querySelector('.player-0');
const player1 = document.querySelector('.player-1');
const elementDice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn-new');
const btnHold = document.querySelector('.btn-hold');
const btnRoll = document.querySelector('.btn-roll');
let currentScore = 0;
const scores = [0, 0];
let activePlayer = 0;

elementScore0.textContent = 0;
elementScore1.textContent = 0;
elementDice.classList.add('hidden');


btnRoll.addEventListener('click', function () {
    const dice = Math.trunc(Math.random() * 6) + 1;

    elementDice.classList.remove('hidden');

    elementDice.src = `dice-${dice}.png`;

    if( dice !== 1){
        currentScore += dice;
        document.getElementById(`current-${activePlayer}`).textContent = currentScore;
    }else {
        document.getElementById(`current-${activePlayer}`).textContent = 0;
        currentScore = 0
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0.classList.toggle('player-active');
        player1.classList.toggle('player-active');
    }
})