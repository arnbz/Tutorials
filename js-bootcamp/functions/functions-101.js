let greetings = function () {
  console.log('Welcome user!');
};

greetings();
greetings();
greetings();

let square = function (num) {
  let result = num * num;
  return result;
};

let value = square(3);
console.log(value);
let otherValue = square(10);
console.log(otherValue);

// Challenge Area
let convertFahrenheitToCelsius = function (fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
};

let temp1 = convertFahrenheitToCelsius(32);
let temp2 = convertFahrenheitToCelsius(68);

console.log(temp1);
console.log(temp2);
