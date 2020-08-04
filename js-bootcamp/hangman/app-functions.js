// DOM elements
const gameStatusSection = document.querySelector('.game-status-section');
const gameSection = document.querySelector('.game-section');

// Creates DOM elements for showing the actual word and the
// remaining guesses
const generateDOM = (game) => {
  let generatedDOM = document.createElement('div');

  // create element for showing the word
  let word = document.createElement('p');
  word.textContent = `Word: ${game.puzzle}`;

  //create element for showing remaining guess
  let remainingGuess = document.createElement('p');
  remainingGuess.textContent = `Remaining guess: ${game.remainingGuesses}`;

  generatedDOM.append(word);
  generatedDOM.append(remainingGuess);

  return generatedDOM;
};

// Creates DOM elements for showing game failure or pass states
const generateStatusDOM = function (gameStatus) {
  let h2 = document.createElement('h2');
  if (gameStatus === 'passed') {
    h2.textContent = 'Congratulations: Game Won!';
  } else if (gameStatus === 'failed') {
    h2.textContent = 'Game over! You lost!';
  }

  return h2;
};

const renderGame = (game) => {
  // clear the DOM elements
  gameSection.innerHTML = '';

  // generate DOM elements for the game
  let div = generateDOM(game);

  // show new DOM elements
  gameSection.append(div);

  if (game.status === 'passed') {
    gameStatusSection.innerHTML = '';
    gameStatusSection.appendChild(generateStatusDOM('passed'));
  } else if (game.status === 'failed') {
    gameStatusSection.innerHTML = '';
    gameStatusSection.appendChild(generateStatusDOM('failed'));
  }
};
