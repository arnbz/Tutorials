// Every value in javascript either evaluates to a truthy of falsy value

// Falsy values - false, 0, '', null, undefined, NaN
// Truthy values - anything other than Falsy values. [], {} are also truthy values.

const notes = [];

if (notes[0]) {
  console.log('Note found');
} else {
  console.log('Note not found');
}
