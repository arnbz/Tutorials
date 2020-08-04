// Types of coercion - boolean, number, string
// We have to avoid number and string type coercions at any cost

// Prints 52, number gets converted to string
console.log('5' + 2);

// Prints 3, string gets converted to number
console.log('5' - 2);

// Prints true, never use double equality operator
console.log('5' == 5);

// Check the type of a variable
let value = true + 12;
console.log(typeof value); // number
console.log(value); // 13
