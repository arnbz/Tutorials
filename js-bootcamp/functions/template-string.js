// More readable
let name = 'Arnab';
console.log(`Hey, my name is ${name} and I'm ${24 + 1} years old`);

// Challenge
let getTip = function (total, tipPercent = 0.2) {
  return `A ${tipPercent * 100}% tip on $${total} would be $${
    total * tipPercent
  }`;
};

let result = getTip(40, 0.2);
console.log(result);
