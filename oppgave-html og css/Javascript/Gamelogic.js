const options = ["✊", "✋", "✌️"];

const product = {
  Wins: 0,
  losses: 0,
  Ties: 0
};

function game(userInput) {
  const number = Math.floor(Math.random() * options.length);
  const computerChoice = options[number];

  if (userInput === "✊" && computerChoice === "✋") {
    product.losses++;
    document.querySelector('.result-message').innerHTML = 'You lost.';
  } else if (userInput === "✊" && computerChoice === "✌️") {
    product.Wins++;
    document.querySelector('.result-message').innerHTML = 'You win.';
  } else if (userInput === "✋" && computerChoice === "✊") {
    product.Wins++;
    document.querySelector('.result-message').innerHTML = 'You win.';
  } else if (userInput === "✋" && computerChoice === "✌️") {
    product.losses++;
    document.querySelector('.result-message').innerHTML = 'You lost.';
  } else if (userInput === "✌️" && computerChoice === "✋") {
    product.Wins++;
    document.querySelector('.result-message').innerHTML = 'You win.';
  } else if (userInput === "✌️" && computerChoice === "✊") {
    product.losses++;
    document.querySelector('.result-message').innerHTML = 'You lost.';
  } else if (userInput === computerChoice) {
    product.Ties++;
    document.querySelector('.result-message').innerHTML = 'You tied.';
  }

  alert(
    `Result:\nWins: ${product.Wins} Losses: ${product.losses} Ties: ${product.Ties}`
  );

  document.querySelector('.match-details').innerHTML =
    "You: " + userInput + " vs Computer: " + computerChoice;
  document.querySelector('.score-board').innerHTML =
    "Wins: " + product.Wins + " | Losses: " + product.losses + " | Ties: " + product.Ties;
}

function resetScore() {
  product.Wins = 0;
  product.losses = 0;
  product.Ties = 0;

  document.querySelector('.result-message').innerHTML = '';
  document.querySelector('.match-details').innerHTML = '';
  document.querySelector('.score-board').innerHTML = '';
}
