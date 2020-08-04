let name = 'Arnab Roy';

// Length property
console.log(name.length);

// Convert to uppercase
console.log(name.toUpperCase());

// Convert to lower case
console.log(name.toLowerCase());

// Includes method
let password = 'abc123password098';
let result = password.includes('password');
console.log(result);

// Trim method
name = '  Arnab Roy   ';
console.log(name.trim());

// Challenge
let isValidPassword = function (password) {
  return password.length > 8 && !password.includes('password');
};

console.log(isValidPassword('asdfp'));
console.log(isValidPassword('abc123!@#$%^&'));
console.log(isValidPassword('aoshtuasohsahathoupassword'));
