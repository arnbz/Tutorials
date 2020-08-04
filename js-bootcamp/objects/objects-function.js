let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326,
};

let otherBook = {
  title: 'A Peoples History',
  author: 'Howard Zinn',
  pageCount: 723,
};

let getSummary = function (book) {
  return {
    authorSummary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`,
  };
};

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.authorSummary);
console.log(bookSummary.pageCountSummary);

// Challenge area
let convertTemperature = function (fahrenheit) {
  return {
    fahrenheit: fahrenheit,
    celsius: ((fahrenheit - 32) * 5) / 9,
    kelvin: ((fahrenheit + 459.67) * 5) / 9,
  };
};

let temperatures = convertTemperature(0);
console.log(temperatures);
