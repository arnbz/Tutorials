let num = 103.941;

console.log(num.toFixed(1));

console.log(Math.round(num));

console.log(Math.ceil(num));
console.log(Math.floor(num));

// Generates a number from 0 inclusive to 1 exclusive
let randomNum = Math.random();
console.log(randomNum);

// A function that generates a number from min to max
let generateRandom = function (min, max) {
  return Math.floor(min + (max - min + 1) * Math.random());
};

console.log(generateRandom(5, 10));

// Challenge area
let makeGuess = function (number) {
  let guessedNumber = generateRandom(1, 5);
  return guessedNumber === number;
};

console.log(makeGuess(2));
