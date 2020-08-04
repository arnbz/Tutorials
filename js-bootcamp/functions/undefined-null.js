// Undefined for variable
let name;

if (name === undefined) {
  console.log('Please provide a name');
} else {
  console.log(name);
}

// Undefined for function arguments
let square = function (num) {
  console.log(num);
};

square();

// Undefined for default return value
let value = square();
console.log(value);

// When we want to clear a variable of a value, we should not assign undefined. Rather, we
// should assign null.
let anyValue = 5;

// Reset the value
anyValue = null;

console.log(anyValue);
