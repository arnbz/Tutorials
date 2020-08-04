// Challenge Area
let convertFahrenheitToCelsius = function (fahrenheit) {
  //Will not work because temp1 not initialized before
  if (temp1 < 15) {
    console.log('This works');
  }
  return ((fahrenheit - 32) * 5) / 9;
};

let temp1 = convertFahrenheitToCelsius(32);
let temp2 = convertFahrenheitToCelsius(68);

console.log(temp1);
console.log(temp2);
