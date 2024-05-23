'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Answer!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number';
    displayMessage('⛔ No Number');
    document.querySelector('body').style.backgroundColor = 'brown1';
  }

  //when guess is right
  else if (guess === secretNum) {
    document.querySelector('.message').textContent = '🎉 Correct Answer!';

    document.querySelector('body').style.backgroundColor = 'Green';
    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNum;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // when guess is wrong
  else if (guess !== secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNum ? '📈 Too High!' : '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('body').style.backgroundColor = 'grey';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// when guess is too high
//   else if (guess > secretNum) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📈 Too High!';
//       //document.querySelector('body').style.backgroundColor = 'purple';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game!';
//       document.querySelector('body').style.backgroundColor = 'grey';
//       document.querySelector('.score').textContent = 0;
//     }
//   }

//   // when guess is too low
//   else if (guess < secretNum) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📉 Too Low!';
//       //document.querySelector('body').style.backgroundColor = 'blue';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game!';
//       document.querySelector('body').style.backgroundColor = 'grey';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
