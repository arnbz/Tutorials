const account = {
  name: 'Arnab Roy',
  expenses: [],
  income: [],
  addExpense: function (description, amount) {
    this.expenses.push({ description: description, amount: amount });
  },
  addIncome: function (description, amount) {
    this.income.push({ description: description, amount: amount });
  },
  getAccountSummary: function () {
    let totalExpense = 0;
    this.expenses.forEach(function (item) {
      totalExpense += item.amount;
    });

    let totalIncome = 0;
    this.income.forEach(function (item) {
      totalIncome += item.amount;
    });

    console.log(
      `${this.name} has a balance of $${
        totalIncome - totalExpense
      }. $${totalIncome} in income. $${totalExpense} in expenses.`
    );
  },
};

account.addIncome('Salary', 1000);
account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
account.getAccountSummary();
