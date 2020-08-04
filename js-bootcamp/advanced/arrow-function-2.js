// Regular functions have access to the arguments
const add = function () {
  return arguments[0] + arguments[1] + arguments[2];
};

console.log(add(1, 3, 5));

// Arrow functions don't have access to the arguments
const addArrow = () => {
  return arguments[0] + arguments[1] + arguments[2];
};

console.log(addArrow(1, 3, 5));

// Arrow functions don't bind the 'this' keyword
// They can't be used as methods
const person = {
  name: 'Arnab',
  // Will print 'The name of the person in undefined'
  getSummary: () => {
    return `The name of the person is ${this.name}`;
  },
};

console.log(person.getSummary());
