// Closure -> in javascript, function, methods and objects remembers the context in which it was created

// Example of a closure
// In other programming languages, as soon as myFunction finishes execution,
// the 'myName' parameter is supposed to be deleted. But instead, in javascript,
// the inner function still remembers it.
const myFunction = (myName) => {
  return (name) => {
    console.log(`Hi ${name}, my name is ${myName}`);
  };
};

const anotherFunction = myFunction('Arnab');
anotherFunction('Plaban');

console.log('============================================');

// Another example
// This is called function currying
const adder = (fixedAmount) => {
  return (number) => number + fixedAmount;
};

const add10 = adder(10);
console.log(add10(2));
console.log(add10(30));

console.log('============================================');

// Creating a counter
const counter = () => {
  let counter = 0;

  return {
    increment() {
      counter++;
    },
    decrement() {
      counter--;
    },
    getCounter() {
      return counter;
    },
  };
};

const myCounter = counter();

myCounter.increment();
myCounter.increment();
console.log(myCounter.getCounter());

console.log('============================================');

const createTipper = (tip) => {
  return (amount) => amount * tip;
};

const tipperOne = createTipper(0.15);
console.log(tipperOne(100));
