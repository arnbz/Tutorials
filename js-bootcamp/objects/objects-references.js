// Objects are created somewhere in memory and variables just refer to it

let myAccount = {
  name: 'Arnab Roy',
  expense: 0,
  income: 0,
};

let addExpense = function (account, expense) {
  // This will make a change in myAccount too
  account.expense += expense;
  console.log(account);
};

addExpense(myAccount, 200);
console.log(myAccount);

let anotherAccount = myAccount;
anotherAccount.income = 1000;

console.log(anotherAccount);
console.log(myAccount);

anotherAccount = {};

console.log(anotherAccount);
console.log(myAccount);

// Challenge area
console.log('Challenge area');

let addIncome = function (account, income) {
  account.income += income;
};

let resetAccount = function (account) {
  account.income = 0;
  account.expense = 0;
};

let getAccountSummary = function (account) {
  let balance = account.income - account.expense;
  return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expense} in expenses.`;
};

addIncome(myAccount, 1000);
addExpense(myAccount, 200);
let summary = getAccountSummary(myAccount);
console.log(summary);
resetAccount(myAccount);
summary = getAccountSummary(myAccount);
console.log(summary);
