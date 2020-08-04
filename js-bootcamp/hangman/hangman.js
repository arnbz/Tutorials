class Hangman {
  constructor(word, maxGuess) {
    this._remainingGuesses = maxGuess;
    // Game status -> playing, passed, failed
    this.status = 'playing';
    //array of characters
    this.word = word.split('');
    // array of guessed characters, unique and lowercase
    this.guessedChars = [];
  }

  get remainingGuesses() {
    return this._remainingGuesses;
  }

  get puzzle() {
    let inCompleteWord = [];
    this.word.forEach((char) => {
      this.guessedChars.includes(char.toLowerCase()) || char === ' '
        ? inCompleteWord.push(char)
        : inCompleteWord.push('*');
    });

    return inCompleteWord.join('');
  }

  makeGuess(char) {
    if (this.status === 'playing') {
      char = char.toLowerCase();
      // if guessed char is unique
      if (!this.guessedChars.includes(char)) {
        // store it
        this.guessedChars.push(char);

        // if char is not in word, decrement remaining guesses
        let index = this.word.findIndex(function (wordChar) {
          return wordChar.toLowerCase() === char;
        });

        index === -1 ? this._remainingGuesses-- : 0;
      }

      // re-calculate game status
      this.calculateGameStatus();
    }
  }

  calculateGameStatus() {
    let allCharsFound = this.word.every((char) => {
      return this.guessedChars.includes(char.toLowerCase()) || char === ' ';
    });

    if (this.remainingGuesses === 0) {
      this.status = 'failed';
    } else if (allCharsFound) {
      this.status = 'passed';
    }
  }
}
