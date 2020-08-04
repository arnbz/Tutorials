// Create an object
let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326,
};

// Print the object
console.log(myBook);

// Read  a particular object property
console.log(`${myBook.title} by ${myBook.author}`);

// Change an object property
myBook.title = 'Animal Farm';

console.log(`${myBook.title} by ${myBook.author}`);

// Challenge area
let person = {
  name: 'Arnab',
  age: 26,
  location: 'Dhaka',
};

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);

person.age += 1;

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);
