// Multiple arguments
let add = function (a, b) {
  return a + b;
};

let result = add(12, 13);
console.log(result);

// Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
  return 'Name:' + name + ' Score:' + score;
};

let scoreText = getScoreText();
console.log(scoreText);

scoreText = getScoreText('Arnab', 25);
console.log(scoreText);

// Using only one parameter
scoreText = getScoreText(undefined, 22);
console.log(scoreText);

// Challenge area
let tipCalculator = function (total, tip = 0.2) {
  return total * tip;
};

let tip = tipCalculator(100);
console.log(tip);

// returns NaN
tip = tipCalculator(undefined);
console.log(tip);

// returns 0
tip = tipCalculator(null);
console.log(tip);
