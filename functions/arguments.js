// multiple arguments

let add = function(a, b, c) {
  //  let sum = a + b;
  return a + b + c;
}

let result = add(10, 1, 5);

console.log(result);

// default arguments

let getScoreText = function(name = 'anon', score = 0) {
  return 'Name: ' + name + ' Score: ' + score;
}

let scoreText = getScoreText(undefined, 90);
console.log(scoreText);

// challange area

let bill = 10;
//tip calc (getTip) args = total bill and tip % (.2) = 20%
let getTip = function(total, tipPercent = 0.2) {
  return total * tipPercent;
}

let totalBill = getTip(bill, 0.5) + bill;


console.log(totalBill);
