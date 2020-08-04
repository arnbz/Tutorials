getPuzzle(1)
  .then((puzzle) => {
    puzzleWord = puzzle;
  })
  .catch((err) => {
    console.log(err);
  });

// let game1 = new Hangman(puzzleWord, 2);

// window.onkeydown = function (e) {
//   game1.makeGuess(e.key);
//   renderGame(game1);
// };
