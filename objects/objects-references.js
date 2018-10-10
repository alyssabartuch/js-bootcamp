let myAccoumt = {
  name: 'alyssa bartuch',
  expenses: 0,
  income: 0
}

let otherAccount = myAccoumt;
otherAccount.income = 1000;

//'account' references exact object myAccoumt; explains why changing account in function changes myAcocunt global object
let addExpense = function(account, amount) {
  account.expenses += amount;
}

let addIncome = function(account, amount) {
  account.income += amount;
}

let resetAccount = function(account) {
  account.expenses = 0;
  account.income = 0;
}

let getAccountSummary = function(account) {
  let balance = account.income - account.expenses;

  return `Account for ${account.name} has ${balance}. ${account.income} in income. ${account.expenses} in expenses.`;
}

addExpense(myAccoumt, 2.50);
addExpense(myAccoumt, 200);
console.log(myAccoumt);


addIncome(myAccoumt, 1500);
console.log(myAccoumt);

let summary = getAccountSummary(myAccoumt);
console.log(summary);

resetAccount(myAccoumt);
console.log(myAccoumt);
