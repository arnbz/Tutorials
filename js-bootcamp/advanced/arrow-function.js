const squareLong = (num) => {
  return num * num;
};

// Arrow function shorthand is used when functions are one-lined and just
// return something
const square = (num) => num * num;

const people = [
  {
    name: 'Arnab',
    age: 26,
  },
  {
    name: 'Plaban',
    age: 24,
  },
  {
    name: 'Dinosaur',
    age: 100,
  },
];

const peopleUnder30 = people.filter((person) => person.age < 30);
const personAged26 = people.find((person) => person.age === 26);

console.log(peopleUnder30);
console.log(personAged26);
