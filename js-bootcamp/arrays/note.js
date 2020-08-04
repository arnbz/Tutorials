// We can store numbers, strings, booleans, arrays, functions and objects in
// arrays. Array items don't need to be of the same type.
// const notes = [
//   'Note 1',
//   function () {
//     console.log('Hello World');
//   },
//   12,
// ];
//
// console.log(notes);

const notes = ['Note 1', 'Note 2', 'Note 3'];

const anotherNote = [
  {
    title: 'My next trip',
    body: 'I would like to go to Spain',
  },
  {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better.',
  },
  {
    title: 'Office modification',
    body: 'Get a new seat',
  },
];

// Get the length of an array
// console.log(notes.length);
// console.log(notes[0]);

// An index that does not exist gives undefined
// console.log(notes[5]);

// Getting elements from the end
// // Accessing the last item
// console.log(notes[notes.length - 1]);
// // Accessing the second last item
// console.log(notes[notes.length - 2]);

// Adding and deleting element from the end
// console.log(notes.pop());
// notes.push('Another note');

// Adding and removing element from the start
// console.log(notes.shift());
// notes.unshift('My first note');

// Manipulating items between
// // Start at index 1, delete 2 items, insert items 1,2,3
// notes.splice(1, 2, 1, 2, 3);

// Looping an array
// // forEach takes a function as an argument
// notes.forEach(function (item, index) {
//   console.log(`Item at index ${index} is ${item}`);
// });

// The for loop
// for (let count = 0; count < notes.length; count++) {
//   console.log(notes[count]);
// }

// Searching an array
// // indexOf returns the index of the item if found, otherwise -1.
// // It uses the === operator.
// console.log(notes.indexOf('Note 4'));
// // Since objects are passed by reference, it will search for
// // the exact object at a specific memory location. In our case, it will return -1.
// console.log(anotherNote.indexOf({}));
// // Will return false. Since memory locations are not same, they are not the same object.
// console.log({} === {});
// // For objects, use the findIndex function.
// let indexOfSearch = anotherNote.findIndex(function (item) {
//   return item.title === 'My next trip';
// });
// console.log(indexOfSearch);
// // The find function returns the search object
// let searchObject = anotherNote.find(function (item) {
//   return item.title === 'My next trip';
// });
// console.log(searchObject);
// const searchNotes = function (notesToSearch, title) {
//   return notesToSearch.find(function (note) {
//     if (note.title !== undefined)
//       return note.title.toUpperCase() === title.toUpperCase();
//   });
// };
// let searchedNote = searchNotes(anotherNote, 'My next trip');
// console.log(searchedNote);

// Filtering an array
// const searchNotes = function (notesArray, queryString) {
//   return notesArray.filter(function (item) {
//     const titleMatch = item.title
//       .toUpperCase()
//       .includes(queryString.toUpperCase());
//     const bodyMatch = item.body
//       .toUpperCase()
//       .includes(queryString.toUpperCase());
//
//     return titleMatch || bodyMatch;
//   });
// };
// console.log(searchNotes(anotherNote, 'have'));

// Sorting an array
// The sort method usually takes in no arguments. For complex data types,
// we can pass a function for providing the sort mechanism.
// This function sorts notes by title
// const sortNotes = function (notes) {
//   return notes.sort(function (a, b) {
//     if (a.title.toLowerCase() < b.title.toLowerCase()) {
//       return -1;
//     } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });
// };
// console.log(sortNotes(anotherNote));
