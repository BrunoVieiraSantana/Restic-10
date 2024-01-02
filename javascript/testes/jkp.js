const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function playGame(playerChoice) {
  // Computer's random choice
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Determine the winner
  let result;
  switch (playerChoice) {
    case 'rock':
      result = computerChoice === 'scissors' ? 'You win!' : computerChoice === 'paper' ? 'You lose!' : 'It\'s a tie!';
      break;
    case 'paper':
      result = computerChoice === 'rock' ? 'You win!' : computerChoice === 'scissors' ? 'You lose!' : 'It\'s a tie!';
      break;
    case 'scissors':
      result = computerChoice === 'paper' ? 'You win!' : computerChoice === 'rock' ? 'You lose!' : 'It\'s a tie!';
      break;
    default:
      result = 'Invalid choice. Please choose rock, paper, or scissors.';
  }

  // Display the result
  console.log(`You chose ${playerChoice}.`);
  console.log(`Computer chose ${computerChoice}.`);
  console.log(result);

  rl.close();
}

rl.question('Choose your move (rock, paper, or scissors): ', (answer) => {
  playGame(answer.toLowerCase());
});
