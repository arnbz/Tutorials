class HangmanClass {
  constructor(word, remainingGuesses) {
    this.remainingGuesses = remainingGuesses;
    this.word = word.split('');
    this.guessedChar = [];

    // populate guessedChar with stars(*), replacing all letters except spaces
    this.word.forEach((letter) => {
      letter === ' '
        ? this.guessedChar.push(letter)
        : this.guessedChar.push('*');
    });
  }

  get puzzle() {
    return this.guessedChar.join('');
  }

  guessWord() {
    char = char.toLowerCase();

    if (!this.remainingGuesses) {
      console.log('You guessed too many times!');
      return;
    }

    for (let i = 0; i < this.word.length; i++) {
      if (this.word[i].toLowerCase() === char) {
        this.guessedChar[i] = this.word[i];
      } else {
        this.remainingGuesses--;
      }
    }
  }
}
