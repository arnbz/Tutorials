//Reasons to avoid 'var'

var firstName = 'Arnab';

//1. Variables can be re-declared. This won't generate errors but in big programs,
// this might be unintentional and cause errors.
var firstName = 'Roy';

//2. var has function based scope.

if (true) {
  var carName = 'Honda';
  let anotherCar = 'Porsche';
}

// No problem, because var can only be scoped in functions, not in any
// other block.
console.log(carName);

// Will create problem, because let is block scoped.
console.log(anotherCar);

let createVariable = function () {
  var bmw = 'BMW';
};

// Will create problem, because var is function scoped. The variable bmw
// can't be accessed outside.
console.log(bmw);

//3. Hoisting behaviour is confusing

// Will print undefined
console.log(pet);
var pet = 'Mew';

anotherPet = 'Banjara';
// Will print Banjara
console.log(anotherPet);
var anotherPet;
