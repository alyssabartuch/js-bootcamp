let name = 'alyssa';
let age = 26;

console.log(`hello, my name is ${name}. I am ${age} years old.`);

// challange area

let bill = 10;
//tip calc (getTip) args = total bill and tip % (.2) = 20%
let getTip = function(total, tipPercent = 0.2) {
  let tip = total * tipPercent;
  return `A ${tipPercent*100}% tip on $${total} would be $${tip}`;
}

let totalBill = getTip(60);


console.log(totalBill);
