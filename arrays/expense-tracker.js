const account = {
  name: 'alyssa bartuch',
  expenses: [],
  income: [],
  addExpense: function(desc, amount) {
    this.expenses.push({
      description: desc,
      amount: amount
    });
  },
  addIncome: function(desc, amount) {
    this.income.push({
      description: desc,
      amount: amount
    });
  },
  getAccountSummary: function() {
    let totalExpenses = 0;
    let totalIncome = 0;
    let totalBalance = 0;

    this.expenses.forEach(function(expense) {
      totalExpenses += expense.amount;
    });

    this.income.forEach(function(income) {
      totalIncome += income.amount;
    });

    totalBalance = totalIncome - totalExpenses;

    return `${this.name} has a balance of $${totalBalance}. $${totalIncome} in income and $${totalExpenses} in expenses.`
  }
};

// add income array to account
// set up addIncome method -> desc, amount
// tweak getAccountSummary to add up income and balance (income - expenses) 'alyssa bartuch has a balance of $__. $__ in income. $__ in expenses.'



account.addExpense('rent', 950);
account.addExpense('coffee', 2);
account.addIncome('paycheck', 1000);
console.log(account.getAccountSummary());
